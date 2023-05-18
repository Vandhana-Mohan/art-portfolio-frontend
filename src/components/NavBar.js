import { Link } from "react-router-dom";
import Art_Logo from "../assets/Art_Logo.png";

function NavBar() {
  return (
    <nav className="sticky top-0 bg-red-900 flex flex-col sm:flex-row items-center justify-between rounded shadow-red-500/50 shadow-xl px-6 py-3">
      <Link to="/">
        <img
          src={Art_Logo}
          alt="Shop_Logo"
          className="w-16 h-16 object-cover"
        />
      </Link>
      <ul className="flex flex-col sm:flex-row mt-4 sm:mt-0">
        <li className="mx-2 sm:mx-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 text-xl font-bold"
          >
            Examples
          </Link>
        </li>
        <li className="mx-2 sm:mx-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 text-xl font-bold"
          >
            My Collection
          </Link>
        </li>
        <li className="mx-2 sm:mx-4">
          <Link
            to="/groceries/new"
            className="text-white hover:text-gray-300 text-xl font-bold"
          >
            Add New Collection
          </Link>
        </li>
        <li className="mx-2 sm:mx-4">
          <Link
            to="/groceries/new"
            className="text-white hover:text-gray-300 text-xl font-bold"
          >
            Add Image to Collection
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

/* 

<li className="cursor-pointer hover:text-gray-300 mr-4 text-xl font-bold mb-6">
  <Link
    to="/categories"
    className="bg-transparent text-white py-2 px-4 rounded"
  >
    Categories
  </Link>
</li>
  <TotalItems />
  <Search /> 

*/
