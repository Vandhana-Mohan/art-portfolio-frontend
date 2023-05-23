import { Link } from "react-router-dom";
import Art_Logo from "../assets/Art_Logo.png";
import AuthDetails from "../components/AuthDetails";

function Header() {
  return (
    <header className="bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300">
      <div className="container mx-4 px-4 flex flex-col items-center justify-between sm:flex-row">
        <Link to="/">
          <div className="flex items-center text-3xl font-bold">
            <img
              src={Art_Logo}
              alt="Shop_Logo"
              className="w-36 h-36 object-contain"
            />
            <h1
              className="text-black tracking-wider text-5xl sm:text-5xl font-bold"
              style={{ fontFamily: "'Alex Brush', cursive" }}
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
