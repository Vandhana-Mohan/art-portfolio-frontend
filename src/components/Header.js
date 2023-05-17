import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b-2 border-gray-300 py-4 bg-red-100">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">
          <Link to="/">
            <h1
              className="text-red-600 tracking-wider ml-2 text-3xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Fresh-Picks
            </h1>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <i className="fa fa-user fa-2x sm:fa-3x animate-pulse mb-2 mr-2 text-red"></i>
          <div className="text-red-600 text-lg">Already a member? Log In</div>
          <div className="text-red-600 text-lg">Sign Up</div>
          <div>
            <Link
              className="text-red-600 text-lg hover:text-red-700 hover:underline"
              to="/about"
            >
              About Us
            </Link>
          </div>
          <div>
            <Link
              className="text-red-600 text-lg hover:text-red-700 hover:underline"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
