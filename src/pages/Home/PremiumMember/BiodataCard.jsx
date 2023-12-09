/* eslint-disable react/prop-types */

import { FcApproval } from "react-icons/fc";
import { Link } from "react-router-dom";
const BiodataCard = ({ item }) => {
  const {
    _id,
    biodataId,
    biodataType,
    profileImg,
    permanentDivisionName,
    age,
    occupation,
    memberType,
  } = item;

  return (
    <div
      className="h-[550px] rounded-lg text-gray-500 object-cover  "
      style={{
        backgroundImage:
          "url(https://i.ibb.co/b1Z8GbR/404236229-2707845426039685-424987649423321754-n.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col justify-evenly h-full">
        <div className="relative flex-1">
          <img
            className="w-full h-[250px] object-center"
            src={profileImg}
            alt=""
          />
          {memberType == "Premium" && (
            <div className="flex gap-1 absolute bottom-3 right-0">
              <FcApproval className="text-2xl"></FcApproval>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300">
                Premium
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col   flex-1">
          <div className="p-5 font-semibold">
            <h2 className="text-2xl">Biodata ID: {biodataId}</h2>
            <h2 className="text-lg py-1">Gender: {biodataType}</h2>
            <h3 className="text-lg">Age: {age}</h3>
            <h3 className="text-lg py-1">Occupation: {occupation}</h3>
            <h3 className="text-lg">Address: {permanentDivisionName}</h3>
          </div>
          <div className="px-5 h-full flex  items-end">
            <Link to={`/cardDetails/${_id}`}>
              <button className="relative text-xl font-semibold inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden  text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-[#836b6c] group-hover:from-red-200 group-hover:via-red-300 group-hover:to-[#836b6c] dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  View Details
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiodataCard;
