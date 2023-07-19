import { LayoutHeader } from "@/widgets";
import { Outlet } from "react-router-dom";
import { Border } from "@/pages";

const Layout = () => {

  return (
    <>
      <div className="flex font-mono overflow-y-hidden">
        <Border />
        <div className="w-full h-100vh flex flex-col h-screen">
          <LayoutHeader />
          <Outlet />
        </div>
      </div>  


    </>
  );
};

export default Layout;
