import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
    </>
  );
};

export default Layout;
