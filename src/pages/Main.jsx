import { Outlet } from "react-router-dom";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
