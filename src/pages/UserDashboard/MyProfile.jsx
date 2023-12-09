import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcApproval } from "react-icons/fc";
import { Spinner } from "flowbite-react";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const { data: profileData, isPending } = useQuery({
    queryKey: ["profileData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata?user=${user.email}`);
      return res.data;
    },
  });
  console.log(profileData);
  const handleReqToPremium = (data) => {
    const premiumReq = {
      name: data.name,
      userEmail: data.userEmail,
      biodataId: data.biodataId,
      memberType: data.memberType,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#836b6c",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Request For Premium!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.post("/premiumRequest", premiumReq).then((res) => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Your Biodata Send For Approvel.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  if (isPending) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full min-h-[50vh] lg:min-h-screen flex justify-center items-center ">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <div>
      {profileData.length > 0 ? (
        <div className="bg-red-600">
          <div>
            {profileData?.map((data) => (
              <div key={data._id} className="relative">
                <img
                  className="w-full h-96"
                  src="https://i.ibb.co/DzMmTMz/Premium-Photo-Modern-workplace-with-creative-desk-with-plants-have-blue-wall-1.jpg"
                  alt=""
                />
                <div className="absolute top-[75%] w-full">
                  <div className="flex items-end px-5 md:flex-row flex-col md:justify-between w-full">
                    <div className="flex gap-4 items-end">
                      <img
                        className="md:w-56 md:h-56 w-36 h-36 rounded-full object-center"
                        src={data.profileImg}
                        alt=""
                      />
                      <h5 className="mb-4 text-xl font-semibold text-gray-700 tracking-tight  dark:text-white">
                        {data.name}
                      </h5>
                      {data.memberType == "Premium" && (
                        <div className="flex gap-1 mb-4">
                          <FcApproval className="text-2xl"></FcApproval>
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                            Premium
                          </span>
                        </div>
                      )}
                    </div>
                    <div className=" px-2 md:my-0 my-10">
                      <h5 className="mb-4 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                        Contact Information
                      </h5>
                      <p className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-400">
                        Email : {data.userEmail}
                      </p>
                      <p className=" text-xl font-semibold text-gray-700 dark:text-gray-400">
                        Contact Number :{data.mobileNumber}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className=" px-2">
                      <h5 className=" text-4xl mb-6 font-bold tracking-tight text-[#836b6c] dark:text-white">
                        Personal Information
                      </h5>
                      <div className="grid grid-cols-2  ">
                        <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                          Biodata ID :{data.biodataId}
                        </p>
                        <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                          Occupation :{data.occupation}
                        </p>
                        <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                          Gender :{data.biodataType}
                        </p>
                        <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                          Date Of Birth :{data.dateOfBirth}
                        </p>
                        <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                          Height :{data.height}
                        </p>
                        <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                          Age :{data.age}
                        </p>
                        <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                          Race :{data.race}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className=" px-2">
                        <h5 className="mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                          Family Information
                        </h5>
                        <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                          FathersName :{data.fathersName}
                        </p>
                        <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                          MothersName : {data.mothersName}
                        </p>
                      </div>
                      <div className=" px-2">
                        <h5 className=" mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                          Expectation
                        </h5>
                        <div>
                          <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                            Expected Partner Age : {data.expectedPartnerAge}
                          </p>
                          <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                            Expected Partner Height :{" "}
                            {data.expectedPartnerHeight}
                          </p>
                          <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                            Expected Partner Weight :{" "}
                            {data.expectedPartnerWeight}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" px-2  pb-16">
                      <h5 className="mb-6 text-4xl  font-bold tracking-tight text-[#836b6c] dark:text-white">
                        Address
                      </h5>
                      <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                        Permanent Division Name : {data.permanentDivisionName}
                      </p>
                      <p className="mb-3 text-xl font-semibold text-gray-700 dark:text-gray-400">
                        PresentDivisionName :{data.presentDivisionName}
                      </p>
                    </div>
                  </div>

                  {data.memberType == "Premium" ? (
                    ""
                  ) : (
                    <div className="flex justify-center mb-20">
                      <button
                        onClick={() => handleReqToPremium(data)}
                        className="relative text-xl font-semibold inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-[#836b6c] group-hover:from-red-200 group-hover:via-red-300 group-hover:to-[#836b6c] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
                      >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                          Make Biodata To Premium
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center min-h-screen">
          <h3 className="text-4xl font-semibold text-[#836b6c] text-center  my-16 border-y-2 p-4">
            Create the Profile First
          </h3>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
