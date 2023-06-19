import { AuthForm } from "@/features/Auth";
import { Songs } from "@/pages";
// import { useQuery } from "react-query";
// import axios from "axios";

const Home = () => {
  // const { isLoading, error, data } = useQuery("music", () =>

  // );

  // if (isLoading) return "Loading...";

  // if (error) return "An error has occurred: " + error;

  // console.log(data);

  const isAuth = false;

  return <>{!isAuth ? <AuthForm /> : <Songs />}</>;
};

export default Home;
