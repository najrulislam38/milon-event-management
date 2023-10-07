import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="w-full h-fit">
      {pathname === "/" ? (
        <div>
          {" "}
          <Navbar></Navbar>
          <div id="header-wrapper">
            <Banner></Banner>
          </div>
        </div>
      ) : (
        <div>
          <Navbar></Navbar>
        </div>
      )}
    </header>
  );
};

export default Header;
