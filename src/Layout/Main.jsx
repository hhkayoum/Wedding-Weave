import { Outlet } from "react-router-dom";
import Nav from "../Shared/Nav";
import Footer from "../Shared/Footer";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
