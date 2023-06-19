import { FC, useState } from "react";
import axios from "axios";

const AuthForm: FC = () => {
  const [login, setLogin] = useState(false);

  const ChangeForm = () => {
    setLogin(!login);
  };

  const Login = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          username: "string",
          email: "string",
          password: "string",
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
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const Register = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          username: "string",
          email: "string",
          password: "string",
        },
      );
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
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
            <div className="card-body">
              {login ? (
                <></>
              ) : (
                <>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-bold">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="input-bordered input"
                    />
                  </div>
                </>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  className="input-bordered input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  className="input-bordered input"
                />
                {login ? (
                  <>
                    <label className="label">
                      <a href="#" className="link-hover label-text-alt link">
                        Forgot password?
                      </a>
                    </label>
                  </>
                ) : (
                  <></>
                )}
              </div>
              {login ? (
                <>
                  {/* <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Remember me</span>
                      <input type="checkbox" className="toggle" checked />
                    </label>
                  </div> */}
                  <div className="form-control mt-2">
                    <button
                      className="btn-primary btn text-white font-semibold"
                      onClick={Login}
                    >
                      Login
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-control mt-2">
                    <button
                      className="btn-primary btn text-white font-semibold"
                      onClick={Register}
                    >
                      Registration
                    </button>
                  </div>
                </>
              )}
              <div className="divider">
                <button className="text-base" onClick={ChangeForm}>
                  {login ? "Register" : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
