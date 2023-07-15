import { LayoutHeader } from "@/widgets";
import { Outlet } from "react-router-dom";
import { Border } from "@/pages";
import { Preloader } from "@/features/preloader/ui/Preloader";
const Layout = () => {

  return (
    <>
      <Preloader />
      <div className="flex font-mono overflow-y-hidden">
        <Border />

        <div className="w-full">
          <LayoutHeader />
          <Outlet />
        </div>
      </div>  


    </>
  );
};

export default Layout;
