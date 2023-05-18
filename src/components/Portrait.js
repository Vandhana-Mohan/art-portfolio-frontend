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

/* <div className="p-4 text-center">
        <Link
          to={`/art/${portrait.id}`}
          className="text-blue-500 hover:underline"
        >
          <h2 className="text-2xl font-bold mb-2">
            {portrait.name
              .split(" ")
              .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>
        </Link>

        <p className="text-lg mb-2">
          {portrait.description
            ? portrait.description.charAt(0).toUpperCase() +
              portrait.description.slice(1)
            : "Description : Not Available"}
        </p>

        <div className="flex flex-wrap mb-4 justify-center">
          <p className="text-gray-600 text-base mr-2">Category:</p>
          <p className="text-lg">
            {portrait.category
              ? portrait.category.charAt(0).toUpperCase() +
                portrait.category.slice(1)
              : "Not Available"}
          </p>
        </div>

        <div className="flex flex-wrap mb-4 justify-center">
          <p className="text-gray-600 text-base mr-2">Price:</p>
          <p className="text-lg">{portrait.price} USD</p>
        </div>
        <div className="flex flex-wrap mb-4 justify-center">
          <p className="text-gray-600 text-base mr-2">Quantity:</p>
          <p className="text-lg">
            {portrait.quantity} {portrait.unit}
          </p>
        </div>

        <div className="flex flex-wrap mb-4 justify-center">
          <p className="text-gray-600 text-base mr-2">Organic:</p>
          <p className="text-lg">{portrait.is_organic ? "Yes" : "No"}</p>
        </div> */
