import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-green-100 p-1 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <h1
            className="text-indigo-600 tracking-wider ml-2 text-3xl sm:text-5xl font-bold"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Fresh-Picks
          </h1>
        </Link>
      </div>

      <div className="flex items-center">
        <div className="text-indigo-600 text-lg">Already a member ? Log In</div>
      </div>
      <div className="flex items-center">
        <div className="text-indigo-600 text-lg">Sign Up</div>
      </div>
      <div className="flex items-center">
        <div className="text-indigo-600 text-lg">
          {" "}
          <Link className="hover:text-indigo-700 hover:underline" to="/about">
            {" "}
            About Us
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-indigo-600 text-lg">
          {" "}
          <Link className="hover:text-indigo-700 hover:underline" to="/contact">
            {" "}
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
