import Footer from "../../Component/Footer/Footer";

const MyEvent = () => {
  return (
    <>
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 my-20 min-h-[60vh] ">
        <div>
          <h1 className="text-4xl text-center">
            You have not made any events yet.
          </h1>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyEvent;
