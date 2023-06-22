import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { useEffect } from "react";
import { setAuthenticated } from "@/features/Auth/AuthSlice";
import { AuthForm } from "@/features/Auth";
import { Songs } from "@/pages";

const Home = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      dispatch(setAuthenticated(token));
    }
  }, [dispatch]);

  console.log(isAuthenticated);

  return <>{!isAuthenticated ? <AuthForm /> : <Songs />}</>;
};

export default Home;
