import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import SuggetionsData from "./SuggetionsData";
import { useContext } from "react";
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";
import { FcApproval } from "react-icons/fc";
import { Spinner } from "flowbite-react";

const CardDetails = () => {
  const cardData = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const id = useParams();
  console.log(id);

  const {
    biodataId,
    biodataType,
    age,
    name,
    profileImg,
    dateOfBirth,
    height,
    occupation,
    race,
    fathersName,
    mothersName,
    permanentDivisionName,
    presentDivisionName,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    mobileNumber,
    userEmail,
    memberType,
  } = cardData;

  let addFavouritesData = {
    email: user.email,
    name: cardData.name,
    id: cardData.biodataId,
    permanentDivisionName: cardData.permanentDivisionName,
    occupation: cardData.occupation,
  };

  const handleSubmit = async () => {
    const favourite = await axiosPublic.post("/favourites", addFavouritesData);
    console.log(favourite.data);
    if (favourite.data.insertedId) {
      // show success popup
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${addFavouritesData.name} is added to the favourites.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const { data: profileData, isPending } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata?user=${user.email}`);
      return res.data;
    },
  });
  const { data: totalBiodata } = useQuery({
    queryKey: ["totalBiodata"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata?bioType=${biodataType}`);
      return res.data;
    },
  });
  // console.log(totalBiodata);
  // const filterSuggestionsData = totalBiodata.filter((data) => data._id !== _id);
  // console.log(filterSuggestionsData);
  const handleContactReq = async (cardData) => {
    if (!profileData) {
      navigate("/dashboard/editBiodata");
    }
    const reqDataInfo = {
      userEmail: cardData.userEmail,
      mobileNo: cardData.mobileNumber,
      name: cardData.name,
      biodataId: cardData.biodataId,
      selfBiodataId: profileData[0]?.biodataId,
      selfUserEmail: profileData[0]?.userEmail,
      selfUserName: profileData[0]?.name,
      status: "pending",
    };

    const contactReqData = await axiosPublic.post(
      "/contactRequest",
      reqDataInfo
    );
    if (contactReqData.data.insertedId) {
      // show success popup
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Waiting for Contact Request Approved`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isPending) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full min-h-[50vh] lg:min-h-screen flex justify-center items-center ">
        {/* <span className="loading loading-spinner w-12 h-12 "></span> */}
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }
  return (
    <div
      className="lg:min-h-[90vh] flex flex-col md:flex-row "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/P1ddW3Q/403755237-7007749992620544-1184593736249786652-n.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex-1">
        <div className="flex justify-center ">
          <h3 className="text-4xl font-semibold text-[#836b6c] text-center mt-32 mb-16 border-y-2 p-4">
            {name} Biodata Details
          </h3>
        </div>
        <div className=" border border-gray-700 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 ">
          <div className=" p-5  ">
            <div>
              <div className="flex justify-center relative">
                <img
                  className="object-center w-80  h-80 rounded-full mb-4    bg-[#EBEDEE] "
                  src={profileImg}
                  alt=""
                />
                {memberType == "Premium" && (
                  <div className="flex gap-1 absolute top-[9%] left-[25%]">
                    <FcApproval className="text-2xl"></FcApproval>
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                      Premium
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <div className="border-2 px-2 border-[#836b6c]">
                <h5 className=" text-4xl mb-6 font-bold tracking-tight text-[#836b6c] dark:text-white">
                  Personal Information
                </h5>
                <div className="grid grid-cols-2  ">
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Biodata ID : {biodataId}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Occupation : {occupation}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Gender : {biodataType}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Date Of Birth : {dateOfBirth}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Height : {height}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Age : {age}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Race : {race}
                  </p>
                </div>
              </div>
              <div className="border-2 px-2 border-[#836b6c]">
                <h5 className="mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                  Family Information
                </h5>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  FathersName : {fathersName}
                </p>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  MothersName : {mothersName}
                </p>
              </div>

              <div className="border-2 px-2 border-[#836b6c]">
                <h5 className="mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                  Address
                </h5>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  Permanent Division Name : {permanentDivisionName}
                </p>
                <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                  PresentDivisionName : {presentDivisionName}
                </p>
              </div>

              <div className="border-2 px-2 border-[#836b6c]">
                <h5 className=" mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                  Expectation
                </h5>
                <div className="grid grid-cols-2">
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Expected Partner Age : {expectedPartnerAge}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Expected Partner Height :{expectedPartnerHeight}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Expected Partner Weight : {expectedPartnerWeight}
                  </p>
                </div>
              </div>
              {profileData[0]?.memberType == "Premium" && (
                <div className="border-2 px-2 border-[#836b6c]">
                  <h5 className="mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                    Contact Information
                  </h5>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Email : {userEmail}
                  </p>
                  <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                    Contact Number : {mobileNumber}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="lg:flex justify-center">
            {profileData?.map((proData) => (
              <div key={proData._id}>
                {proData?.memberType == "Basic" ? (
                  <button
                    onClick={() => handleContactReq(cardData)}
                    className="relative text-xl font-semibold inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-[#836b6c] group-hover:from-red-200 group-hover:via-red-300 group-hover:to-[#836b6c] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                  >
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Request For Contact Information
                    </span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            ))}

            <button
              onClick={handleSubmit}
              className="relative text-xl font-semibold inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-[#836b6c] group-hover:from-red-200 group-hover:via-red-300 group-hover:to-[#836b6c] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Add to favourites
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        {" "}
        <div className="flex justify-center ">
          <h3 className="text-4xl font-semibold text-[#836b6c] text-center mt-32 mb-16 border-y-2 p-4">
            Suggestion For You
          </h3>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 px-3">
          {totalBiodata?.map((suggestionData) => (
            <SuggetionsData
              key={suggestionData._id}
              suggestionData={suggestionData}
            ></SuggetionsData>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
