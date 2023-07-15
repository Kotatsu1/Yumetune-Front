import { FC } from "react";
import { useAppDispatch } from "@/app/hooks";
import { clearAuthenticated } from "@/features/Auth/AuthSlice";
import useAxios from "@/interceptors";

const Profile: FC = () => {
  const dispatch = useAppDispatch();
  const axiosRequest = useAxios();

  const Logout = async () => {
    try {
      await axiosRequest.delete(`/auth/logout`, 
        {
          withCredentials: true,
        }
      );
      dispatch(clearAuthenticated());
    } catch (error) {
      console.log("error: " + error);
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
