import { useLoaderData } from "react-router-dom";
import Event from "./Event";

const Home = () => {
  const events = useLoaderData();
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 my-20 ">
      <div>
        <h2 className="section-title w-fit mx-auto text-4xl font-poppins font-bold mb-7">
          Our Services
        </h2>
        <p className="section-description text-center">
          We handle any type of social event. We are committed to your service.{" "}
          <br />
          We provide our clients with the best service.
        </p>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {events.map((event) => (
            <Event key={event.id} event={event}></Event>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;