const Banner = () => {
  return (
    <div
      className="w-full h-[90vh] object-cover"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/vPbnjXF/403669429-668618618745645-3319100152578440078-n.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-center gap-3 lg:gap-16 items-center h-full max-w-[1200px] mx-auto">
        <div>
          <h1 className="lg:text-6xl md:text-3xl text-xl pt-7 font-semibold text-[#836b6c] pl-2">
            A Journey to Forever Begins Now
          </h1>
          <p className="lg:text-2xl md:text-lg text-medium font-bold text-[#a88c8e] md:mt-5 mt-2 pl-2">
            Embark on the journey of a lifetime at Wedding Wave. <br /> Begin
            your search for everlasting love and create <br /> your own
            beautiful forever story.
          </p>
        </div>
        <img
          className="md:w-[400px] w-[150px] md:h-full h-[350px]"
          src="https://i.ibb.co/CBRVSLV/403661850-3576543459268269-8489203359854485987-n-removebg-preview.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
