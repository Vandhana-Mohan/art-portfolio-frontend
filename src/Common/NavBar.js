import { Link } from "react-router-dom";
import TotalItems from "../components/ImagesComponents/TotalItems";

function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-orange-500 to-yellow-200 flex flex-col sm:flex-row items-center justify-between rounded shadow-red-500/50 shadow-md px-6 py-3">
      <ul className="flex flex-col sm:flex-row justify-evenly mt-4 sm:mt-0">
        <li className="mx-2 sm:mx-4 md:mx-8 lg:mx-32">
          <Link
            to="/"
            className="transition-colors duration-300 text-2xl sm:text-2xl md:text-2xl font-semibold text-center text-black tracking-wide mb-4"
          >
            Examples
          </Link>
        </li>
        <li className="mx-2 sm:mx-4 md:mx-8 lg:mx-16">
          <Link
            to="/index"
            className="transition-colors duration-300 text-2xl sm:text-2xl md:text-2xl font-semibold text-center text-black tracking-wide mb-4"
          >
            My Collection
          </Link>
        </li>
        {/* <li className="mx-2 sm:mx-4 md:mx-8 lg:mx-16">
          <Link
            to="/art/new"
            className="text-black hover:text-gray-300 text-xl font-bold transition-colors duration-300"
          >
            Add New Collection
          </Link>
        </li> */}
        <li className="mx-2 sm:mx-4 md:mx-8 lg:mx-16">
          <Link
            to="/art/newImage"
            className="transition-colors duration-300 text-2xl sm:text-2xl md:text-2xl font-semibold text-center text-black tracking-wide mb-4"
          >
            Add Image to Collection
          </Link>
        </li>
        <TotalItems />
      </ul>
    </nav>
  );
}

export default NavBar;
