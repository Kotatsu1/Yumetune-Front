import { LayoutHeader } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex flex-col">
        <LayoutHeader />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
