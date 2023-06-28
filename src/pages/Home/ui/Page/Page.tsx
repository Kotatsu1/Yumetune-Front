import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setAuthenticated, AuthForm } from "@/features";
import { Browse } from "@/pages";

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

  return <>{!isAuthenticated ? <AuthForm /> : <Browse />}</>;
};

export default Home;
