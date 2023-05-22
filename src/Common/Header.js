import { Link } from "react-router-dom";
import Art_Logo from "../assets/Art_Logo.png";
import AuthDetails from "../components/AuthDetails";

function Header() {
  return (
    <header className="border-b-2 border-gray-300 py-4 bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500">
      <div className="container mx-4 px-4 flex flex-col items-center justify-between sm:flex-row">
        <Link to="/">
          <div className="flex items-center text-3xl font-bold">
            <img
              src={Art_Logo}
              alt="Shop_Logo"
              className="w-24 h-24 object-contain ml-4"
            />
            <h1
              className="text-white tracking-wider text-3xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Artistic Universe
            </h1>
          </div>
        </Link>
        <AuthDetails />
      </div>
    </header>
  );
}

export default Header;
