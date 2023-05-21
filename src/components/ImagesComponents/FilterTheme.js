import { Link } from "react-router-dom";

function FilterTheme({ cat }) {
  return (
    <div className="rounded-lg border shadow-md overflow-hidden">
      <Link
        to={`/art/${cat.id}`}
        className="py-2 px-4 rounded-lg bg-green-500 bg-opacity-50 shadow-md w-max transition-colors duration-300"
      >
        {cat.image_url ? (
          <img
            src={cat.image_url}
            alt={cat.title}
            className="w-full h-60 object-cover"
          />
        ) : (
          <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 font-bold text-xl">
              No Image Available
            </p>
          </div>
        )}
      </Link>
      <div className="p-4 text-center">
        <Link to={`/art/${cat.id}`} className="text-blue-500 hover:underline">
          <h2 className="text-2xl font-bold mb-6">
            Title:{" "}
            {cat.title
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>
        </Link>

        <div className="flex items-center mb-8">
          <strong className="text-lg">Description: </strong>
          <p className="text-lg ml-2">
            {cat.description
              ? cat.description.charAt(0).toUpperCase() +
                cat.description.slice(1)
              : "Description: Not Available"}
          </p>
        </div>

        <div className="flex items-center mb-8">
          <strong className="text-lg">Theme: </strong>
          <p className="text-lg ml-2">
            {cat.theme ? cat.theme : "Not Available"}
          </p>
        </div>

        <div className="flex items-center mb-8">
          <strong className="text-lg">Medium / Material: </strong>
          <p className="text-lg ml-2">
            {cat.medium ? cat.medium : "Not Available"}
          </p>
        </div>

        <div className="flex items-center mb-8">
          <strong className="text-lg">Image Created On: &nbsp;</strong>
          <p className="text-lg">
            {new Date(cat.created_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {cat.is_for_sale ? (
          <div className="flex items-center mb-8">
            <strong className="text-lg">For Sale, &nbsp;</strong>
            <p className="text-lg">
              <strong>Price: </strong>
              {cat.price} USD
            </p>
          </div>
        ) : (
          <p className="text-lg mb-4">
            <strong>Not For Sale</strong>
          </p>
        )}

        <div className="flex flex-wrap mb-4 justify-center">
          <Link
            to={`/art/${cat.id}`}
            className="py-2 px-4 mt-6 bg-green-300 hover:bg-green-100 text-xl font-bold flex focus:outline-none focus:shadow-outline rounded-lg shadow-md w-max transition-colors duration-300 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterTheme;
