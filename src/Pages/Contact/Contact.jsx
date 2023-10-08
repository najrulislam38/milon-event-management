import Footer from "../../Component/Footer/Footer";
import "./Contact.css";
import { GrLocation } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <section>
        <div id="contact-header" className="flex justify-center items-center">
          <div data-aos="fade-up" data-aos-duration="1000">
            <h2 className="text-3xl md:text-4xl text-white font-poppins text-center  drop-shadow-2xl capitalize">
              Lets make something awesome together!
            </h2>
            <p className="text-base-200 text-center my-4 tracking-widest">
              You event program, Our responsibility
            </p>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 my-20 min-h-[60vh] ">
          <div className="md:flex gap-12">
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className="md:w-1/2"
            >
              <h3 className="text-2xl  ">
                <span className="text-3xl text-[#FF444A] mb-5 font-poppins font-semibold">
                  Have you any Social Events?
                </span>{" "}
                <br /> Contact us without any hesitation
              </h3>
              <div className="my-10 space-y-10">
                <div className="flex gap-4">
                  <GrLocation className="mt-1 text-3xl text-[#FF444A]"></GrLocation>
                  <div className="space-y-2">
                    <h4 className="font-poppins text-xl font-medium">
                      Address:
                    </h4>
                    <p className="font-medium text-gray-600">
                      Dhaka, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BiSolidPhoneCall className="mt-1 text-3xl text-[#FF444A]"></BiSolidPhoneCall>
                  <div className="space-y-2">
                    <h4 className="font-poppins text-xl font-medium">
                      Phone No.:
                    </h4>
                    <p className="font-medium text-sm text-gray-600">
                      01XXX-XXXXXX
                    </p>
                    <p className="font-medium text-sm text-gray-600">
                      01XXX-XXXXXX
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <HiOutlineMail className="mt-1 text-3xl text-[#FF444A]"></HiOutlineMail>
                  <div className="space-y-2">
                    <h4 className="font-poppins text-xl font-medium">
                      Email :
                    </h4>
                    <p className="font-medium text-gray-600">
                      milonevent.management@gmail.com
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-3">Social Link: </h4>
                  <div className="flex flex-wrap gap-5">
                    <BsFacebook className="text-3xl text-blue-600 cursor-pointer"></BsFacebook>
                    <BsTwitter className="text-3xl text-blue-700 cursor-pointer"></BsTwitter>
                    <BsInstagram className="text-3xl text-[#FF444A] cursor-pointer"></BsInstagram>
                    <BsLinkedin className="text-3xl text-blue-400 cursor-pointer"></BsLinkedin>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className="md:w-1/2"
            >
              <h3 className="text-2xl text-center font-poppins font-medium">
                Fil Up Your information
              </h3>
              <form className="border px-14 py-10 rounded-xl mt-5 ">
                <div>
                  <div className="relative z-0 w-full mb-6 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Name
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="floating_email"
                    id="phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone Number
                  </label>
                </div>

                <div>
                  <textarea
                    name=""
                    id=""
                    rows="5"
                    placeholder="write your opinion! "
                    className="border w-full p-3 mb-4 rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer></Footer>
    </>
  );
};

export default Contact;
