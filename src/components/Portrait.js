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
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w-1/3 flex-wrap">
              <div className="w-max h-full p-1 md:p-2">
                {portrait.image_url ? (
                  <img
                    alt={portrait.name}
                    className="block h-full w-full rounded-lg object-cover object-center"
                    src={portrait.image_url}
                  />
                ) : (
                  <div className="w-max h-60 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 font-bold text-xl">
                      No Image Available
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex flex-wrap mb-4 justify-center">
        <Link
          to={`/art/${portrait.id}`}
          className="py-2 px-4 mt-6 bg-red-300 hover:bg-red-100 text-xl font-bold flex focus:outline-none focus:shadow-outline rounded-lg shadow-red-500/50 shadow-md w-max transition-colors duration-300 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Portrait;

// className="w-full h-60 object-cover"

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
