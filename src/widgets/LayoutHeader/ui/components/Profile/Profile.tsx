import { FC } from "react";
import { useAppDispatch } from "@/app/hooks";
import { clearAuthenticated } from "@/features/Auth/AuthSlice";
import axios from "axios";

const Profile: FC = () => {
  const dispatch = useAppDispatch();

  const Logout = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:8000/api/auth/logout",
        {
          withCredentials: true,
        },
      );
      const data = response.data;
      dispatch(clearAuthenticated());
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dropdown-end dropdown">
      <label tabIndex={0} className="btn-ghost btn-square avatar btn">
        <div className="w-10 rounded-full">
          <img src="/profile.png" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        <li>
          <button onClick={Logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
