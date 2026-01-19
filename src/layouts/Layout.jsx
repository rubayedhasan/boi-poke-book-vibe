import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      {/* navbar component:: NavBar  */}
      <NavBar />

      {/*dynamic section:: dynamic content will be render here  */}
      <Outlet />

      {/* footer component :: Footer  */}
      <Footer />
    </>
  );
};

export default Layout;
