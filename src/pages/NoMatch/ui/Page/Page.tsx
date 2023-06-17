import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <section>
      <div className="container flex h-screen flex-col items-center justify-center gap-y-3">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <p className="text-3xl font-medium text-neutral">Go back, Stranger</p>
        <Link className="btn-primary btn px-10 text-lg font-semibold" to="/">
          Back
        </Link>
      </div>
    </section>
  );
};

export default NoMatch;
