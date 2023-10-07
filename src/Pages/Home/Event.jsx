import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiDollar } from "react-icons/bi";

const Event = ({ event }) => {
  const { id, service_title, picture, event_hashtag, rating, price } = event;
  return (
    <div className="border shadow-lg p-2">
      <div className="relative">
        <img src={picture} alt="" className="w-full" />
        <p className="text-gray-600 bg-base-300 p-1 absolute bottom-1 left-1">
          {event_hashtag}
        </p>
      </div>
      <div className="p-5">
        <h2 className="font-poppins text-xl font-semibold">{service_title}</h2>
        <div className="flex justify-between items-center mt-3 mb-6">
          <div className="font-medium">
            Reviews: <span className="text-gray-500">{rating}</span>
          </div>
          <div className="text-lg font-medium flex gap-1 items-center">
            Price:{" "}
            <span className="flex gap-1 items-center text-gray-500">
              {price} <BiDollar />
            </span>
          </div>
        </div>
        <Link
          to={`/service/${id}`}
          className="flex justify-center items-center"
        >
          <button className="py-3 px-7 bg-white border-2 border-[#FF444A] text-black font-medium hover:bg-[#FF444A] hover:text-white duration-300 rounded active:bg-[#FF444A] active:opacity-75 focus:bg-[#FF444A] opacity-80 ">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object,
};

export default Event;
