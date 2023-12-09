import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BiodataCard from "../Home/PremiumMember/BiodataCard";
import { Spinner } from "flowbite-react";
import { Helmet } from "react-helmet-async";

const Biodatas = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isPending } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodata`);
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
  return (
    <div>
      <Helmet>
        <title>Wedding Wave | Biodata </title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/gMcmv71/403679677-6916773688414819-38648167620083882-n.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div>
            <div className="flex justify-center ">
              <h3 className="text-4xl font-semibold text-[#836b6c] text-center mt-20 mb-16 border-y-2 p-4">
                Choice Your Favourite Person
              </h3>
            </div>
            {
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 max-w-[1200px] mx-auto">
                {data?.map((item) => (
                  <BiodataCard key={item._id} item={item}></BiodataCard>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
