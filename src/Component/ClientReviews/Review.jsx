import PropTypes from "prop-types";

const Review = ({ review }) => {
  const { client_name, client_picture, reviews } = review;
  return (
    <div className="border bg-base-200 shadow-md px-5 py-10 my-5">
      <div className=" flex justify-center items-center my-5 ">
        <img
          src={client_picture}
          alt={`${client_name}s picture`}
          className="w-[140px] h-[140px] rounded-full"
        />
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-poppins font-medium text-center">
          {client_name}
        </h3>
        <p className="text-sm text-justify text-gray-500 pt-3">
          {`"${reviews}"`}
        </p>
      </div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object,
};

export default Review;
