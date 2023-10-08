const Banner = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-[1400px] mx-auto lg:h-screen px-5 md:px-10 lg:px-20 "
    >
      <div className="w-full h-full flex flex-col justify-center items-start  py-20">
        <h1 className="text-3xl md:text-5xl font-poppins font-bold leading-tight mb-3">
          Your <span className="text-[#FF444A]">Event Management</span> <br />{" "}
          Destination
        </h1>
        <p className="text-gray-900 mb-14">
          Welcome to our Social event Management website. We handle any type of
          social event. We are committed <br /> to your service. We provide our
          clients with the best service.
        </p>
        <div className="flex flex-wrap gap-5">
          <button className="py-3 px-7 bg-[#FF444A] border-2 border-[#FF444A] text-white font-medium hover:bg-white hover:text-black duration-300 rounded  ">
            Get Hire
          </button>
          <button className="py-3 px-7 bg-white border-2 border-[#FF444A] text-black font-medium hover:bg-[#FF444A] hover:text-white duration-300 rounded  ">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
