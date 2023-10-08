import PropTypes from "prop-types";

const GalleryEvent = ({ galleryEvent }) => {
  console.log(galleryEvent);
  const { event_name, picture } = galleryEvent;

  return (
    <div className="image-container cursor-pointer">
      <img src={picture} alt={`${event_name}s image`} />
      <h3 className="w-full absolute bottom-0 left-0 text-lg font-poppins font-medium text-center py-2 bg-[rgba(0,0,0,0.6)] text-white">
        {event_name}
      </h3>
      <div className="wap"></div>
    </div>
  );
};

GalleryEvent.propTypes = {
  galleryEvent: PropTypes.object,
};

export default GalleryEvent;
