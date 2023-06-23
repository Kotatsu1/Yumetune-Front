import { useAppSelector } from "@/app/hooks";
import { LayoutHeader, LayoutPlayer } from "@/widgets";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <div className="flex font-mono overflow-y-hidden flex-col">
        <LayoutHeader />
        <main>
          <Outlet />
        </main>
        {/* {isAuthenticated ? (
          <>
            <LayoutPlayer />
          </>
        ) : null} */}
      </div>
    </>
  );
};

export default Layout;
