const Footer = () => {
  return (
    <footer className="w-full bg-black bg-opacity-70 text-white">
      <div className="">
        <div className="w-full max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a className="text-xl md:text-3xl italic font-bold">
              <span className="text-[#FF444A] font-poppins not-italic md:text-4xl">
                Milon
              </span>{" "}
              Event
            </a>
            <ul className="flex flex-wrap items-center mb-6font-medium ">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-center ">
            © 2023{" "}
            <a href="" className="hover:underline">
              Milon Event Management
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
