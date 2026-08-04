import { Outlet } from "react-router-dom";
import Navbar from "../components/base/Navbar";
import Footer from "../components/base/Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}