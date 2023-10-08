import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BiDollar } from "react-icons/bi";
import { AiFillCrown } from "react-icons/ai";

const Event = ({ event }) => {
  const { id, service_title, description, picture, event_hashtag, price } =
    event;
  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="800"
      className="border shadow-lg p-2"
    >
      <div className="relative">
        <img src={picture} alt="" className="w-full" />
        <p className="text-gray-600 bg-base-300 p-1 absolute bottom-1 left-1">
          {event_hashtag}
        </p>
      </div>
      <div className="p-5 flex flex-col">
        <h2 className="font-poppins text-xl font-semibold">{service_title}</h2>
        <div className="flex justify-between items-center mt-3 mb-6">
          <AiFillCrown className="text-3xl text-[#FF444A]"></AiFillCrown>
          <div className="text-lg font-medium flex gap-1 items-center">
            Price:{" "}
            <span className="flex gap-1 items-center text-[#FF444A]">
              {price} <BiDollar />
            </span>
          </div>
        </div>
        <div className="flex-1">
          {description.length > 100 && (
            <p className="text-gray-600 mb-5 text-justify">
              {description.slice(0, 100)}...
            </p>
          )}
        </div>
        <div className="w-fit mx-auto md:mb-5">
          <Link to={`/service/${id}`}>
            <button className="py-2 md:py-3 px-5 md:px-7 bg-white border-2 border-[#FF444A] text-black font-medium hover:bg-[#FF444A] hover:text-white duration-300 rounded active:bg-[#FF444A] active:opacity-75 focus:bg-[#FF444A] opacity-80 ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

Event.propTypes = {
  event: PropTypes.object,
};

export default Event;
