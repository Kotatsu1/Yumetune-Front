import { useEffect } from "react";
import { useAppSelector } from "@/app/hooks";
import { AuthForm } from "@/features";
import { Layout } from "@/widgets";
import { setAuthenticated } from "@/features";
import { useAppDispatch } from "@/app/hooks";


const Hello = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useAppDispatch();

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      dispatch(setAuthenticated(true));
    }
  }

  useEffect(() => {
    checkLogin();
  })

  return <>{isAuthenticated ? <Layout /> : <AuthForm /> }</>;
};

export default Hello;
