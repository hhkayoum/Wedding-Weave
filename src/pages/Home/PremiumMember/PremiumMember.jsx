import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import BiodataCard from "./BiodataCard";
import { Spinner } from "flowbite-react";

const PremiumMember = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isPending } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata/premiumMember`);
      return res.data;
    },
  });
  if (isPending) {
    return (
      <div className="max-w-screen-2xl mx-auto w-full min-h-[50vh] lg:min-h-screen flex justify-center items-center ">
        {/* <span className="loading loading-spinner w-12 h-12 "></span> */}
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }
  console.log(data);
  return (
    <div>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex justify-center ">
          <h3 className="text-4xl font-semibold text-[#836b6c] text-center mt-20 mb-16 border-y-2 p-4">
            Our Premium Member
          </h3>
        </div>
        <div className="grid grid-cols-1 px-4 md:grid-cols-3 gap-2 md:gap-6">
          {data?.map((item) => (
            <BiodataCard key={item._id} item={item}></BiodataCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumMember;
{
  /* <img
        src="https://i.ibb.co/b1Z8GbR/404236229-2707845426039685-424987649423321754-n.jpg"
        alt=""
      /> */
}
{
  /* <img
        src="https://i.ibb.co/cT20NRM/404639916-305466355790489-2519161506482871603-n.jpg"
        alt=""
      />
      <img
        src="https://i.ibb.co/85H5ZzF/404619093-860953149070582-2603374294916830230-n.jpg"
        alt=""
      /> */
}
