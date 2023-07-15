import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="menu rounded-box md:menu-vertical text-lg">
      <li>
        <Link to="/">Browse</Link>
      </li>
      <li>
        <Link to={"/songs"}>Songs</Link>
      </li>
      <li>
        <Link to={"/library"}>Library</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
    </ul>
  );
};

export default Nav;
