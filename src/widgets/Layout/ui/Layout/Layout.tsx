import { LayoutHeader, LayoutPlayer } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const isAuth = false;

  return (
    <>
      <div className="flex font-sans flex-col">
        <LayoutHeader />
        <main>
          <Outlet />
        </main>
        {isAuth ? (
          <>
            <LayoutPlayer />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Layout;
