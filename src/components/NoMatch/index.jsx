import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1>Go back Stranger</h1>
          <p>Page not found</p>
          <Link className="btn-neutral" to="/">
            Back
          </Link>
        </div>
      </section>
    </>
  );
};

export default NoMatch;
