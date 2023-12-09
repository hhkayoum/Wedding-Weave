import { useContext } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";

const UpdateBiodata = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const { data: profileData, isPending } = useQuery({
    queryKey: ["biodata"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata?user=${user.email}`);
      return res.data;
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  if (isPending) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full min-h-[50vh] lg:min-h-screen flex justify-center items-center ">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  const onSubmit = async (data) => {
    const biodataDetails = {
      biodataType: data.biodataType,
      name: data.name,
      profileImg: data.profileImage,
      dateOfBirth: data.dateOfBirth,
      height: data.height,
      weight: data.weight,
      age: parseInt(data.age),
      occupation: data.occupation,
      race: data.race,
      permanentDivisionName: data.permanentDivision,
      presentDivisionName: data.presentDivision,
      expectedPartnerAge: data.expectedPartnerAge,
      expectedPartnerHeight: data.expectedPartnerHeight,
      expectedPartnerWeight: data.expectedPartnerWeight,
      mobileNumber: data.mobileNumber,
    };

    const biodataItem = await axiosPublic.put(
      `/updatedBiodata/${user.email}`,
      biodataDetails
    );
    console.log(biodataItem);
    if (biodataItem.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Profile create successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <h3 className="text-4xl font-semibold text-[#836b6c] text-center my-16 border-y-2 p-4">
          Update Your Biodata
        </h3>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-[#cbccce]">
        <div className="bg-white p-8 rounded shadow-md w-full">
          <h1 className="text-2xl font-bold text-[#836b6c] mb-4 text-center">
            Biodata Form
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {profileData?.map((data) => (
              <div
                key={data._id}
                className="grid grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {/* Biodata Type */}
                <div className="mb-4">
                  <label
                    htmlFor="biodataType"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Biodata Type
                  </label>
                  <select
                    defaultValue={data.biodataType}
                    id="biodataType"
                    name="biodataType"
                    {...register("biodataType", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  >
                    {errors.biodataType && (
                      <span className="text-red-600">Biodata is required</span>
                    )}
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user.displayName}
                    id="name"
                    name="name"
                    {...register("name", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>

                {/* Profile Image Link */}
                <div className="mb-4">
                  <label
                    htmlFor="profileImage"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Profile Image Link
                  </label>
                  <input
                    type="text"
                    id="profileImage"
                    defaultValue={data.profileImage}
                    name="profileImage"
                    {...register("profileImage")}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  />
                  {errors.profileImage && (
                    <span className="text-red-600">
                      Profile Image Link is required
                    </span>
                  )}
                </div>

                {/* Date of Birth */}
                <div className="mb-4">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    defaultValue={data.dateOfBirth}
                    id="dateOfBirth"
                    name="dateOfBirth"
                    {...register("dateOfBirth", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  />
                  {errors.dateOfBirth && (
                    <span className="text-red-600">
                      Date of Birth is required
                    </span>
                  )}
                </div>

                {/* Height */}
                <div className="mb-4">
                  <label
                    htmlFor="height"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Height
                  </label>
                  <input
                    type="number"
                    defaultValue={data.height}
                    id="height"
                    name="height"
                    {...register("height", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  ></input>
                  {errors.height && (
                    <span className="text-red-600">Height is required</span>
                  )}
                </div>

                {/* Weight */}
                <div className="mb-4">
                  <label
                    htmlFor="weight"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Weight
                  </label>
                  <input
                    type="number"
                    id="weight"
                    name="weight"
                    {...register("weight", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  ></input>
                  {errors.weight && (
                    <span className="text-red-600">Weight is required</span>
                  )}
                </div>

                {/* Age */}
                <div className="mb-4">
                  <label
                    htmlFor="age"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    {...register("age", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  ></input>
                  {errors.age && (
                    <span className="text-red-600">Age is required</span>
                  )}
                </div>

                {/* Occupation */}
                <div className="mb-4">
                  <label
                    htmlFor="occupation"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Occupation
                  </label>
                  <select
                    id="occupation"
                    name="occupation"
                    {...register("occupation", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  >
                    <option value="Engineer">{data.occupation}</option>
                    <option value="Engineer">Job</option>
                    <option value="HouseWife">HouseWife</option>
                    <option value="Students">Students</option>
                    {/* Add other occupation options as needed */}
                  </select>
                  {errors.occupation && (
                    <span className="text-red-600">Occupation is required</span>
                  )}
                </div>

                {/* Race */}
                <div className="mb-4">
                  <label
                    htmlFor="race"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Race
                  </label>
                  <select
                    id="race"
                    name="race"
                    {...register("race", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  >
                    <option value="">{data.race}</option>
                    <option value="Caucasian">Caucasian</option>
                    <option value="African">African</option>
                    <option value="Asian">Asian</option>
                    <option value="Indigenous">Indigenous</option>
                    <option value="Hispanic/Latino">Hispanic/Latino</option>
                    <option value="Middle Eastern">Middle Eastern</option>
                  </select>
                  {errors.race && (
                    <span className="text-red-600">Race is required</span>
                  )}
                </div>

                {/* Fathers Name */}
                <div className="mb-4">
                  <label
                    htmlFor="fathersName"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Fathers Name
                  </label>
                  <input
                    type="text"
                    value={data.fathersName}
                    id="fathersName"
                    name="fathersName"
                    {...register("fathersName", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  />
                  {errors.fathersName && (
                    <span className="text-red-600">
                      Fathers Name is required
                    </span>
                  )}
                </div>

                {/* Mothers Name */}
                <div className="mb-4">
                  <label
                    htmlFor="mothersName"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Mothers Name
                  </label>
                  <input
                    value={data.mothersName}
                    type="text"
                    id="mothersName"
                    name="mothersName"
                    {...register("mothersName", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  />
                  {errors.mothersName && (
                    <span className="text-red-600">
                      Mothers Name is required
                    </span>
                  )}
                </div>

                {/* Permanent Division Name */}
                <div className="mb-4">
                  <label
                    htmlFor="permanentDivision"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Permanent Division Name
                  </label>
                  <select
                    id="permanentDivision"
                    name="permanentDivision"
                    {...register("permanentDivision", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  >
                    <option value="">{data.permanentDivisionName}</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                  {errors.permanentDivision && (
                    <span className="text-red-600">
                      Permanent Division Name is required
                    </span>
                  )}
                </div>

                {/* Present Division Name */}
                <div className="mb-4">
                  <label
                    htmlFor="presentDivision"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Present Division Name
                  </label>
                  <select
                    id="presentDivision"
                    name="presentDivision"
                    {...register("presentDivision", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  >
                    <option value="">{data.presentDivisionName}</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattogram">Chattogram</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                  </select>
                  {errors.presentDivision && (
                    <span className="text-red-600">
                      Present Division Name is required
                    </span>
                  )}
                </div>

                {/* Expected Partner Age */}
                <div className="mb-4">
                  <label
                    htmlFor="expectedPartnerAge"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Expected Partner Age
                  </label>
                  <select
                    id="expectedPartnerAge"
                    name="expectedPartnerAge"
                    {...register("expectedPartnerAge", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  >
                    <option value={data.expectedPartnerAge}>18 to 22</option>
                    <option value="18 to 22">18 to 22</option>
                    <option value="23 to 30">23 to 30</option>
                    <option value="30 to 40">30 to 40</option>
                    <option value="40 to 50">40 to 50</option>
                  </select>
                  {errors.expectedPartnerAge && (
                    <span className="text-red-600">
                      Expected Partner Age is required
                    </span>
                  )}
                </div>

                {/* Expected Partner Height */}
                <div className="mb-4">
                  <label
                    htmlFor="expectedPartnerHeight"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Expected Partner Height
                  </label>
                  <select
                    id="expectedPartnerHeight"
                    name="expectedPartnerHeight"
                    {...register("expectedPartnerHeight", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  >
                    <option value="5'0&quot;">5&quot;</option>
                    <option value="5.5'0&quot;">5.5&quot;</option>
                    <option value="6'0&quot;">6&quot;</option>
                  </select>
                  {errors.expectedPartnerHeight && (
                    <span className="text-red-600">
                      Expected Partner Height is required
                    </span>
                  )}
                </div>

                {/* Expected Partner Weight */}
                <div className="mb-4">
                  <label
                    htmlFor="expectedPartnerWeight"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Expected Partner Weight
                  </label>
                  <select
                    id="expectedPartnerWeight"
                    name="expectedPartnerWeight"
                    {...register("expectedPartnerWeight", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  >
                    <option value="40 to 50 kg ">40 to 50 kg</option>
                    <option value="50 to 60 kg ">50 to 60 kg</option>
                    <option value="60 to 70 kg ">60 to 70 kg</option>
                    <option value="70 to 80 kg ">70 to 80 kg</option>
                  </select>
                  {errors.expectedPartnerWeight && (
                    <span className="text-red-600">
                      Expected Partner Weight is required
                    </span>
                  )}
                </div>

                {/* Contact Email (User Email Readonly) */}
                <div className="mb-4">
                  <label
                    htmlFor="contactEmail"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    readOnly
                    id="contactEmail"
                    name="contactEmail"
                    // readOnly
                    {...register("contactEmail", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  />
                  {errors.contactEmail && (
                    <span className="text-red-600">
                      Contact Email is required
                    </span>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="mb-4">
                  <label
                    htmlFor="mobileNumber"
                    className="block text-sm font-medium text-gray-600 mb-1"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    defaultValue={data.mobileNumber}
                    id="mobileNumber"
                    name="mobileNumber"
                    {...register("mobileNumber", { required: true })}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-[#836B6C]"
                  />
                  {errors.mobileNumber && (
                    <span className="text-red-600">
                      Mobile Number is required
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="bg-[#836B6C]  text-white p-2 rounded w-full hover:bg-[#BFB2B3]  focus:outline-none focus:ring focus:border-[#836B6C]"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBiodata;
