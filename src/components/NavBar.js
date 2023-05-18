// import Search from "./Search";
import { Link } from "react-router-dom";
import Art_Logo from "../assets/Art_Logo.png";
// import TotalItems from "./TotalItems";

function NavBar() {
  return (
    <nav className="bg-red-900 flex flex-col sm:flex-row justify-around rounded shadow-red-500/50 shadow-xl">
      <Link to="/">
        <img
          src={Art_Logo}
          alt="Shop_Logo"
          className="w-32 h-32 shadow-green-500/50 shadow-lg object-contain"
        />
      </Link>
      <ul className="flex flex-col sm:flex-row mt-6 justify-around">
        <li className="cursor-pointer hover:text-gray-300 text-xl font-bold mb-6">
          <Link to="/" className="bg-transparent text-white py-2 px-4 rounded">
            Explore All
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300 mr-4 text-xl font-bold mb-6">
          <Link
            to="/groceries/new"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            Add New Item
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300 mr-4 text-xl font-bold mb-6">
          <Link
            to="/categories"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            Categories
          </Link>
        </li>
      </ul>
      {/* <TotalItems /> */}
      {/* <Search /> */}
    </nav>
  );
}

export default NavBar;
