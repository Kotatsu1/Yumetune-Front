import { FC } from "react";
import { useState } from "react";
import { useAppDispatch } from "@/app/hooks";
import { setAuthenticated } from "../AuthSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type Form = {
  login: string;
  username: string;
  email: string;
  password: string;
};

const AuthForm: FC = () => {
  const [login, setLogin] = useState(false);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();

  const handleLogin: SubmitHandler<Form> = async (form) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          login: form.login,
          password: form.password,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Credentials": true,
          },
          withCredentials: true,
        },
      );
      const data = response.data;
      dispatch(setAuthenticated());
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
    console.log(form);
  };

  const handleRegister: SubmitHandler<Form> = async (form) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          username: form.username,
          email: form.email,
          password: form.password,
        },
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("finally");
    }
  };

  const ChangeForm = () => {
    setLogin(!login);
  };

  return (
    <section>
      <div className="hero h-[calc(100vh-68px)]">
        <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
          <div className="flex flex-col justify-center gap-y-4 text-center lg:text-left">
            <h1 className="w-96 text-5xl font-bold">
              Discover the world of music with YumeTune
            </h1>
            <p className="w-96 text-2xl">
              Listen to your dreams with Yumetune - the audio streaming platform
              that takes you to new worlds of sound.
            </p>
          </div>
          <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
            {!login ? (
              <>
                <form
                  className="card-body pb-0"
                  onSubmit={handleSubmit(handleLogin)}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Login</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Login"
                      {...register("login", { required: true })}
                      className="input-bordered input"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                      className="input-bordered input"
                    />
                  </div>
                  <div className="form-control mt-2">
                    <button
                      type="submit"
                      className="btn-primary btn text-white font-semibold"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <form
                  className="card-body pb-0"
                  onSubmit={handleSubmit(handleRegister)}
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Nickname</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nickname"
                      {...register("username", { required: true })}
                      className="input-bordered input"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="E-mail"
                      {...register("email", { required: true })}
                      className="input-bordered input"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password", { required: true })}
                      className="input-bordered input"
                    />
                  </div>
                  <div className="form-control mt-2">
                    <button
                      type="submit"
                      className="btn-primary btn text-white font-semibold"
                    >
                      Registration
                    </button>
                  </div>
                </form>
              </>
            )}
            <div className="divider">
              <button className="text-base" onClick={ChangeForm}>
                {!login ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
