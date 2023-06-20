import { useAppSelector } from "@/app/hooks";
import { AuthForm } from "@/features/Auth";
import { Songs } from "@/pages";
// import { useQuery } from "react-query";
// import axios from "axios";

const Home = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  console.log(isAuthenticated);

  return <>{!isAuthenticated ? <AuthForm /> : <Songs />}</>;
};

export default Home;
