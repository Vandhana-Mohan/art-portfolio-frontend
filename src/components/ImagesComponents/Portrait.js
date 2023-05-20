import { Link } from "react-router-dom";
import { HiDotsVertical } from "react-icons/hi";

function Portrait({ portrait }) {
  const handleMoreOptions = () => {};

  return (
    <div className="rounded-lg shadow-md border">
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

      <div className="flex justify-end p-2">
        <button
          className="text-gray-600 text-2xl hover:text-gray-800"
          onClick={handleMoreOptions}
        >
          <HiDotsVertical />
        </button>
      </div>

      <div className="flex justify-center p-2">
        <Link
          to={`/art/${portrait.id}`}
          className="text-blue-500 hover:underline"
        >
          {portrait.title}
        </Link>
      </div>
    </div>
  );
}

export default Portrait;
