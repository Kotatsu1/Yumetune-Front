import { useAppSelector } from "@/app/hooks";
import { Profile } from "../components";
import { LayoutPlayer } from "@/widgets";

const LayoutHeader = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <header className="navbar flex bg-neutral h-16 w-full justify-between">
        
        <LayoutPlayer />
        <Profile />
      </header>
    </>
  );
};

export default LayoutHeader;
