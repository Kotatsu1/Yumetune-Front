import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";

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
