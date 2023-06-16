import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen bg-primary p-8">
      <div className="rounded-xl bg-white">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
