import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  // use hooks
  const { createUser, setUserProfile, signInWithGoogle } = useAuth();

  // navigate hook
  const navigate = useNavigate();

  // create user event handler
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    // password validation for at least 6 character.
    if (password.length < 6) {
      return toast.error("Your password should be at least 6 characters");
    }

    // password validation for at least one capital letter.
    if (!/(?=.*[A-Z])/.test(password)) {
      return toast.error("Password should have at least one uppercase letter.");
    }

    // password validation for at least  one specific character.
    if (!/(?=.*[@#$%^&+=!])/.test(password)) {
      return toast.error(
        "Password should have at least one specific character."
      );
    }

    // create user func
    createUser(email, password)
      .then(() => {
        setUserProfile(name, photo).then(() => {
          toast.success("Users new account created successfully.");
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // google sign in event handler
  const handleSignInGoogle = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("User Sign In successful.");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20 my-10 md:my-24">
      <div className="w-full flex justify-center items-center">
        <div className="p-5 md:p-10 border flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h4 className="block font-poppins text-3xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mb-3">
            Please Register
          </h4>
          <p className="mt-1 block  text-base leading-relaxed text-gray-700 antialiased">
            Enter your details to register.
          </p>
          <form
            onSubmit={handleCreateUser}
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 flex flex-col gap-6">
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="text"
                  name="name"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FF444A] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FF444A] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#FF444A] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#FF444A] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Name
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="text"
                  name="photo"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FF444A] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FF444A] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#FF444A] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#FF444A] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  PhotoURL (optional)
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="email"
                  name="email"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FF444A] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FF444A] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#FF444A] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Email
                </label>
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="password"
                  type="password"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3  text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#FF444A] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                  required
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#FF444A] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#FF444A] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#FF444A] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Password
                </label>
              </div>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                htmlFor="checkbox"
                data-ripple-dark="true"
              >
                <input
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#FF444A] checked:bg-[#FF444A] checked:before:bg-pink-500 hover:before:opacity-10"
                  id="checkbox"
                />
                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="checkbox"
              >
                <p className="flex items-center  text-sm font-normal leading-normal text-gray-700 antialiased">
                  I agree the
                  <a
                    className="font-medium transition-colors hover:text-pink-500"
                    href="#"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </p>
              </label>
            </div>
            <button
              className="mt-6 block w-full select-none rounded-lg bg-[#FF444A] py-3 px-6 text-center font-poppins align-middle font-semibold text-sm uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Register
            </button>
            <p className="mt-4 block text-center  text-base font-normal leading-relaxed text-gray-700 antialiased">
              Already have an account?
              <Link
                to={"/login"}
                className="font-medium text-[#FF444A] transition-colors hover:text-blue-700"
                href="#"
              >
                {" "}
                Please Login
              </Link>
            </p>
          </form>
          <div className="divider">OR</div>
          <div>
            <div
              onClick={handleSignInGoogle}
              className="p-1 border rounded-full flex items-center cursor-pointer"
            >
              <img
                src="/assets/google-icons.png"
                alt="google icons"
                className="w-6"
              />
              <p className="flex-1 text-center font-medium">
                SingIn With Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
