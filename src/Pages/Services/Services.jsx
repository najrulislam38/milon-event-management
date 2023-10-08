import { useEffect, useState } from "react";
import Footer from "../../Component/Footer/Footer";
import Service from "./service";

const Services = () => {
  const [services, setServices] = useState([]);

  // side effect
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 my-20 min-h-[60vh] ">
        <div className="grid gap-5 md:grid-cols-2">
          {services?.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Services;
