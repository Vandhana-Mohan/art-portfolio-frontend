import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="sticky top-0 bg-red-900 flex flex-col sm:flex-row items-center justify-between rounded shadow-red-500/50 shadow-xl px-6 py-3">
      <ul className="flex flex-col sm:flex-row justify-evenly mt-4 sm:mt-0">
        <li className="mx-2 sm:mx-4 md:mx-8 lg:mx-32">
          <Link
            to="/"
            className="text-white hover:text-gray-300 text-xl font-bold transition-colors duration-300"
          >
            Examples
          </Link>
        </li>
        <li className="mx-2 sm:mx-4 md:mx-8 lg:mx-16">
          <Link
            to="/index"
            className="text-white hover:text-gray-300 text-xl font-bold transition-colors duration-300"
          >
            My Collection
          </Link>
        </li>
        <li className="mx-2 sm:mx-4 md:mx-8 lg:mx-16">
          <Link
            to="/art/new"
            className="text-white hover:text-gray-300 text-xl font-bold transition-colors duration-300"
          >
            Add New Collection
          </Link>
        </li>
        <li className="mx-2 sm:mx-4 md:mx-8 lg:mx-16">
          <Link
            to="/art/newImage"
            className="text-white hover:text-gray-300 text-xl font-bold transition-colors duration-300"
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
