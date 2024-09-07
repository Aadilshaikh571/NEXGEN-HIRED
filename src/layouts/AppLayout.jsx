import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import AboutUs from "@/pages/AboutUs";
import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container pl-10 pr-10">
        <Header ></Header>
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Made with Love by R_Prince Contact <Link to={"/about-us"}><Button variant="secondary" > Know About Us</Button> </Link>
      </div>
    </div>
  );
};

export default AppLayout;
