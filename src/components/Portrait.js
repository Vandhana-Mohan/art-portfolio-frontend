import { Link } from "react-router-dom";

function Portrait({ portrait }) {
  return (
    <div
      key={portrait.id}
      className="rounded-lg shadow-red-500/50 border shadow-md overflow-hidden"
    >
      <Link
        to={`/art/${portrait.id}`}
        className="py-2 px-4 rounded-lg shadow-red-500/50 shadow-md w-max transition-colors duration-300"
      >
        {portrait.image_url ? (
          <img
            alt={portrait.name}
            className="w-full h-60 object-cover"
            src={portrait.image_url}
          />
        ) : (
          <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 font-bold text-xl">
              No Image Available
            </p>
          </div>
        )}
      </Link>

      <div className="flex flex-wrap mb-4 justify-center">
        <Link
          to={`/art/${portrait.id}`}
          className="text-blue-500 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Portrait;
