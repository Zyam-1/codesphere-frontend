import { Link } from "react-router-dom";

const Breadcrumb = ({ path, color, heading }) => {
  return (
    <div className="py-10 px-4 text-white" style={{ backgroundColor: color }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold capitalize text-opacity-50	">
          {heading}
        </h2>
        <nav className="mt-3 text-lg">
          <Link to="/" className="text-white hover:underline text-opacity-50	">
            Homepage
          </Link>
          <span className="mx-3 text-xl"> &gt; </span>
          <span className="font-semibold capitalize text-xl text-opacity-50	">
            {path}
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
