import { useEffect, useState } from "react";
import GalleryEvent from "./GalleryEvent";

const EventsGallery = () => {
  // use State
  const [galleryEvents, setGalleryEvents] = useState([]);

  // use side effect
  useEffect(() => {
    fetch("/gallery.json")
      .then((res) => res.json())
      .then((data) => setGalleryEvents(data));
  }, []);

  return (
    <section className="my-24">
      <h2 className="section-title w-fit mx-auto text-4xl font-poppins font-bold mb-7">
        Events Gallery
      </h2>
      <div className="grid gap-0 md:grid-cols-2 lg:grid-cols-4 pt-6">
        {galleryEvents?.map((galleryEvent) => (
          <GalleryEvent
            key={galleryEvent.id}
            galleryEvent={galleryEvent}
          ></GalleryEvent>
        ))}
      </div>
    </section>
  );
};

export default EventsGallery;
