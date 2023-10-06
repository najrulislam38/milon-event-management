import { Outlet } from "react-router-dom";
import Header from "../Component/Header/Header";

const Root = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-5 md:px-10 lg:px-20">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
