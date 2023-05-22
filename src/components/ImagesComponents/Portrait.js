import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import { Link } from "react-router-dom";

function Portrait({ portrait }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleMoreOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="rounded-lg shadow-md">
      <Link
        to={`/art/${portrait.id}`}
        className="block w-full h-60 rounded-lg overflow-hidden transition-colors duration-300 hover:bg-gray-100"
      >
        {portrait.image_url ? (
          <img
            alt={portrait.title}
            className="w-full h-full object-cover"
            src={portrait.image_url}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200">
            <p className="text-gray-500 font-bold text-xl">
              No Image Available
            </p>
          </div>
        )}
      </Link>

      <div className="flex justify-end items-center p-2 relative">
        <button
          className="text-black-600 text-2xl hover:text-gray-800"
          onClick={handleMoreOptions}
        >
          <HiDotsVertical />
        </button>
        {showOptions && (
          <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-md">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-100">Edit</li>
              <li className="px-4 py-2 hover:bg-gray-100">View</li>
              <li className="px-4 py-2 hover:bg-gray-100">Delete</li>
            </ul>
          </div>
        )}
      </div>

      <div className="p-2 text-center">
        <Link
          to={`/art/${portrait.id}`}
          className="text-white font-bold text-2xl capitalize hover:underline"
        >
          {portrait.title}
        </Link>
      </div>
    </div>
  );
}

export default Portrait;
