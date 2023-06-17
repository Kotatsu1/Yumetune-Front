import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";

const LayoutHeader = () => {
  return (
    <>
      <header className="navbar flex justify-between bg-base-100">
        <Logo />
        <Nav />
        <div className="flex-none gap-3">
          <Search />
          <Profile />
        </div>
      </header>
    </>
  );
};

export default LayoutHeader;
