import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

function Portrait({ portrait }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleMoreOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="rounded-lg shadow-yellow-500/50 shadow-lg">
      <Link
        to={`/art/${portrait.id}`}
        className="block w-full h-60 rounded-lg overflow-hidden transition-colors duration-300"
      >
        {portrait.image_url ? (
          <img
            alt={portrait.title}
            className="w-full h-full object-cover rounded-lg shadow-yellow-500/50 shadow-lg"
            src={portrait.image_url}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full rounded-lg shadow-yellow-500/50 shadow-lg">
            <p className="text-black-500 font-bold text-xl text-center">
              No Image Available
            </p>
          </div>
        )}
      </Link>

      <div className="flex justify-end items-center p-2 relative rounded-lg shadow-yellow-500/50 shadow-lg">
        <button
          className="mt-6 px-8 py-4 font-bold text-black text-xl sm:text-lg md:text-3xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-black shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
          onClick={handleMoreOptions}
        >
          <HiDotsVertical />
        </button>

        {showOptions && (
          <div className="absolute right-0 mt-2 rounded-lg shadow-yellow-500/50 shadow-lg">
            <ul className="py-2">
              <li className="px-4 text-xl font-bold tracking-wide py-2 rounded-lg shadow-yellow-500/50 shadow-lg">
                <Link to="/help">Add to Collection</Link>
              </li>
              <li className="px-4 py-2 text-xl font-bold tracking-wide  rounded-lg shadow-yellow-500/50 shadow-lg">
                <Link to={`/art/${portrait.id}`}>View </Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="text-center rounded-lg shadow-yellow-500/50 shadow-lg">
        <Link
          to={`/art/${portrait.id}`}
          className="text-black font-bold text-xl tracking-wider capitalize hover:underline"
        >
          {portrait.title}
        </Link>
      </div>
    </div>
  );
}

export default Portrait;
