import { Outlet } from "react-router-dom";
import Header from "./components/Shared/Header";
import Footer from "./components/Shared/Footer";

const RootLayout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default RootLayout;
