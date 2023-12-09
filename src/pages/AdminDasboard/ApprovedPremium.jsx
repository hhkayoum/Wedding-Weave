import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Spinner } from "flowbite-react";
import { Helmet } from "react-helmet-async";

const ApprovedPremium = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: reqPremiumData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["reqPremiumData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/premiumRequest");
      return res.data;
    },
  });
  const handlePremiumReqApproved = (data) => {
    axiosPublic.patch(`/biodata/${data.userEmail}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Contact Request Approved`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    axiosPublic
      .delete(`premiumRequest/${data._id}`)
      .then((res) => console.log(res.data));
    refetch();
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
    <div>
      <Helmet>
        <title>Wedding Wave | Approved Premium Member </title>
      </Helmet>
      <div className="flex justify-center ">
        <h3 className="text-4xl font-semibold text-[#836b6c] text-center  my-16 border-y-2 p-4">
          Approved Premium Member
        </h3>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="md:px-6 py-3">
                Name
              </th>
              <th scope="col" className="md:px-6 py-3">
                Email
              </th>
              <th scope="col" className="md:px-6 py-3">
                Biodata ID
              </th>

              <th scope="col" className="md:px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {reqPremiumData.map((data) => (
              <tr
                key={data._id}
                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="md:px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.name}
                </th>
                <td className="md:px-6 py-4">{data.userEmail}</td>
                <td className="md:px-6 py-4">{data.biodataId}</td>

                <td className="md:px-6 py-4">
                  <button
                    onClick={() => handlePremiumReqApproved(data)}
                    type="button"
                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Make Premium
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApprovedPremium;
