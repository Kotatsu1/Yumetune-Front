import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="menu rounded-box lg:menu-horizontal">
      <li>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Browse
        </Link>
      </li>
      <li>
        <Link to={"/songs"}>
          Songs
          <span className="badge badge-info badge-xs"></span>
        </Link>
      </li>
      <li>
        <a>
          Search
          <span className="badge badge-info badge-xs"></span>
        </a>
      </li>
    </ul>
  );
};

export default Nav;
