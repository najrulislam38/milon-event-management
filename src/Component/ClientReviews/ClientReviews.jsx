import { useEffect, useState } from "react";
import Review from "./Review";

const ClientReviews = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-24">
      <h2 className="section-title w-fit mx-auto text-4xl font-poppins font-bold mb-7">
        Clients Reviews
      </h2>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {reviews?.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </section>
  );
};

export default ClientReviews;
