import { useQuery } from "react-query";

const Home = () => {
  const { isLoading, error, data } = useQuery("music", () =>
    fetch("https://api.github.com/repos/tannerlinsley/react-query").then(
      (res) => res.json(),
    ),
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error;

  console.log(data);

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
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="E-mail"
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
                  className="input-bordered input"
                />
                <label className="label">
                  <a href="#" className="link-hover label-text-alt link">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn-primary btn font-bold">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
