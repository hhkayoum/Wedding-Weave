// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Spinner } from "flowbite-react";

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();
  const { data, isPending } = useQuery({
    queryKey: ["revew"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/revew`);
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
    <>
      <div className="flex justify-center ">
        <h3 className="text-4xl font-semibold text-[#836b6c] text-center mt-20 border-y-2 p-4">
          Success Story
        </h3>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <div className=" bg-[#EBEDEE] h-[440px] my-16 rounded-lg ">
              <div className="flex justify-center">
                <img
                  className="h-[180px] lg:h-[250px] w-full object-center rounded-lg"
                  src={item.coupleImg}
                  alt=""
                />
              </div>
              <div className="">
                <div className="text-center p-5 md:p-2 text-gray-500">
                  <div className="flex justify-center">
                    <Rating
                      className="h-[30px]"
                      style={{ maxWidth: 180 }}
                      value={item.review}
                      readOnly
                    />
                  </div>
                  <p className=" text-xl font-semibold py-3">
                    {" "}
                    MarriageDate : {item.marriageDate}
                  </p>
                  <p className=" text-xl md:text-lg  font-semibold">
                    {item.successStoryText}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default SuccessStory;
