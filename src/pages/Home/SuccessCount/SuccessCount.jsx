import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import { Spinner } from "flowbite-react";

const SuccessCount = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["allBiodata"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allBiodata/allData`);
      return res.data;
    },
  });
  const { data: successCount } = useQuery({
    queryKey: ["revew"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/revew`);
      return res.data;
    },
  });
  // if (isPending) {
  //   return (
  //     <div className="max-w-screen-2xl mx-auto w-full min-h-[50vh] lg:min-h-screen flex justify-center items-center ">
  //       <Spinner aria-label="Extra large spinner example" size="xl" />
  //     </div>
  //   );
  // }
  console.log(data);

  const { totalBiodata, maleCount, femaleCount } = data;

  return (
    <div className=" max-w-[1200px] mx-auto mt-28">
      <div className="lg:relative">
        <div>
          <div className="bg-[#FFFFFF] rounded-lg w-full lg:w-[500px] lg:h-[280px] lg:absolute p-5">
            <div className="flex justify-center ">
              <h3 className="text-4xl font-semibold text-[#836b6c] text-center border-y-2 p-4">
                About wedding wave Agency
              </h3>
            </div>
            <p className=" text-gray-500 text-xl font-semibold py-4">
              Welcome to Our Wedding Wave Family. A platform where everybody can
              come and find their perfect life partner. Your journey to love
              begins here.
            </p>
            <p className=" text-gray-500 text-xl font-semibold">
              Providing our client number and the count of successfully
              completed marriages. I crafted this line; feel free to suggest any
              improvements or adjustments.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://i.ibb.co/dLcnxst/405417767-806903274525278-4481370581128865513-n.jpg"
            alt=""
            className="rounded-full lg:w-[750px] lg:h-[750px] hidden lg:block object-cover p-10"
          />
        </div>
        <div className="w-[350px] h-[350px] mx-auto lg:absolute lg:top-[55%] lg:left-[55%] grid grid-cols-2 gap-3 text-gray-500 ">
          <div className="flex justify-center items-center bg-[#B6ACB3] rounded-lg">
            <div>
              <h2 className="text-center text-3xl font-semibold ">
                Total Member
              </h2>
              <h2 className="text-center text-3xl font-semibold mt-4 ">
                {totalBiodata?.length - 1}+
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#B6ACB3] rounded-lg">
            <div>
              <h2 className="text-center text-3xl font-semibold ">Male</h2>
              <h2 className="text-center text-3xl font-semibold mt-4 ">
                {maleCount?.length - 1}+
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#B6ACB3] rounded-lg">
            <div>
              <h2 className="text-center text-3xl font-semibold ">Female</h2>
              <h2 className="text-center text-3xl font-semibold mt-4 ">
                {femaleCount?.length - 1}+
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center bg-[#B6ACB3] rounded-lg">
            <div>
              <h2 className="text-center text-3xl font-semibold ">
                FindPartner
              </h2>
              <h2 className="text-center text-3xl font-semibold mt-4 ">
                {successCount?.length - 1}+
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessCount;
