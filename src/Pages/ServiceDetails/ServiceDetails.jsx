import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import Footer from "../../Component/Footer/Footer";

const ServiceDetails = () => {
  const [service, setService] = useState({});
  const services = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const findService = services?.find((serv) => serv.id === parseInt(id));
    setService(findService);
  }, [id, services]);

  const { service_title, picture, description, price } = service;
  return (
    <>
      <section className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 my-20">
        <div className="max-w-2xl mx-auto">
          <div>
            <figure>
              <img src={picture} alt="" className="w-full" />
            </figure>
            <div className="mt-10">
              <h2 className="font-poppins text-4xl font-semibold mb-3">
                {service_title}
              </h2>
              <p className="my-3 text-gray-700">{description}</p>
              <p className="flex items-center gap-2 text-lg font-medium mb-10">
                Price:
                <span className=" text-[#FF444A] flex items-center">
                  {price}
                  <BiDollar></BiDollar>
                </span>
              </p>
            </div>
            <button className="py-3 px-7 bg-[#FF444A] border-2 border-[#FF444A] text-white font-medium hover:opacity-80 duration-300 rounded  active:bg-[#FF444A] active:opacity-75 focus:bg-[#FF444A] focus:opacity-80 uppercase font-poppins ">
              Get Hire
            </button>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ServiceDetails;
