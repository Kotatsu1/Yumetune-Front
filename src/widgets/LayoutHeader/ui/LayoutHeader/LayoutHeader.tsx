import { Logo, Nav, Profile } from "../components";

const LayoutHeader = () => {
  return (
    <>
      <header className="navbar flex justify-between bg-base-100">
        <Logo />
        <Nav />
        <Profile />
      </header>
    </>
  );
};

export default LayoutHeader;
