import { useLoaderData } from "react-router-dom";
import Event from "./Event";
import Footer from "../../Component/Footer/Footer";
import ClientReviews from "../../Component/ClientReviews/ClientReviews";
import EventsGallery from "./EventsGallery/EventsGallery";

const Home = () => {
  const events = useLoaderData();
  return (
    <>
      <main className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 my-24 ">
        <section data-aos="fade-up" data-aos-duration="800">
          <h3 className="section-title w-fit mx-auto text-4xl font-poppins font-bold mb-7">
            Our Services
          </h3>
          <p className="section-description text-center text-gray-600">
            We handle any type of social event. We are committed to your
            service. <br />
            We provide our clients with the best service.
          </p>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {events.map((event) => (
              <Event key={event.id} event={event}></Event>
            ))}
          </div>
        </section>
        <ClientReviews></ClientReviews>
        <EventsGallery></EventsGallery>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Home;
