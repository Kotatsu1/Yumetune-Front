import { useAppSelector } from "@/app/hooks";
import { Logo, Nav, Profile } from "../components";

const LayoutHeader = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <header className="navbar flex justify-between bg-base-100">
        <Logo />
        {isAuthenticated ? (
          <>
            <Nav />
            <Profile />
          </>
        ) : null}
      </header>
    </>
  );
};

export default LayoutHeader;
