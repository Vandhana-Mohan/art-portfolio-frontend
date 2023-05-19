import { Link } from "react-router-dom";
import Art_Logo from "../assets/Art_Logo.png";

function Header() {
  return (
    <header className="border-b-2 border-gray-300 py-4 bg-red-100">
      <div className="container mx-4 px-4 flex flex-col items-center justify-between sm:flex-row">
        <Link to="/">
          <div className="flex items-center text-3xl font-bold">
            <h1
              className="text-red-600 tracking-wider text-3xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Artistic
            </h1>

            <img
              src={Art_Logo}
              alt="Shop_Logo"
              className="w-24 h-24 object-cover"
            />

            <h1
              className="text-red-600 tracking-wider text-3xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Universe
            </h1>
          </div>
        </Link>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <i className="fa fa-user fa-2x sm:fa-3x animate-pulse mb-2 mr-2 text-red"></i>
          <div className="text-red-600 text-lg">Already a member? Log In</div>
          <div className="text-red-600 text-lg">
            <Link
              className="text-red-600 text-lg hover:text-red-700 hover:underline"
              to="/signUp"
            >
              Sign Up
            </Link>
          </div>
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
