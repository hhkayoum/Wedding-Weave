import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "flowbite-react";

const AdminDasboard = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isPending } = useQuery({
    queryKey: ["allBiodata"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allBiodata/allData`);
      return res.data;
    },
  });
  if (isPending) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full min-h-[50vh] lg:min-h-screen flex justify-center items-center ">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }
  const { totalBiodata, maleCount, femaleCount, premiumCount } = data;

  return (
    <div>
      <Helmet>
        <title>Wedding Wave | Admin Dashboard</title>
      </Helmet>
      <div className="bg-gray-200 p-8 rounded-md shadow-md">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center mb-3">
            <div className="text-4xl font-bold text-blue-500">
              {totalBiodata?.length - 1} +
            </div>
            <div className="text-gray-600 text-3xl font-semibold">
              Total Members
            </div>
          </div>

          <div className="text-center mb-3">
            <div className="text-4xl font-bold text-green-500">
              {" "}
              {maleCount?.length - 1} +
            </div>
            <div className="text-gray-600 text-3xl font-semibold">
              Total Male Member
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-pink-500">
              {femaleCount?.length - 1} +
            </div>
            <div className="text-gray-600 text-3xl font-semibold">
              Total Female Member
            </div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500">
              {premiumCount?.length - 1} +
            </div>
            <div className="text-gray-600 text-3xl font-semibold">
              Total Premium Members
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="text-2xl font-bold text-purple-500">$10,000</div>
          <div className="text-gray-600 text-3xl font-semibold">
            Total Revenue
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDasboard;
