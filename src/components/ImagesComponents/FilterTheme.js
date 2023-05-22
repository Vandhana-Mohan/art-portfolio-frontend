import { Link } from "react-router-dom";

function FilterTheme({ cat }) {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg">
      <Link
        to={`/art/${cat.id}`}
        className="py-2 px-4 w-max rounded-lg overflow-hidden transition-colors duration-300 bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300"
      >
        {cat.image_url ? (
          <img
            src={cat.image_url}
            alt={cat.title}
            className="w-full h-60 object-cover bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg"
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
        <Link
          to={`/art/${cat.id}`}
          className="text-white font-bold text-4xl tracking-wider capitalize hover:underline"
        >
          <h2 className="text-6xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            Title:{" "}
            {cat.title
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>
        </Link>

        <div className="flex items-center mb-8">
          <strong className="sm:text-xl md:text-2xl font-bold text-center mb-8 tracking-wide">
            Description : &nbsp;{" "}
          </strong>
          <p className="text-3xl sm:text-lg md:text-xl font-bold text-center mb-8 tracking-wide">
            {cat.description
              ? cat.description.charAt(0).toUpperCase() +
                cat.description.slice(1)
              : "Description: Not Available"}
          </p>
        </div>

        <div className="flex items-center mb-8">
          <strong className="sm:text-xl md:text-2xl font-bold text-center mb-8 tracking-wide">
            Theme : &nbsp;{" "}
          </strong>
          <p className="text-3xl sm:text-lg md:text-xl font-bold text-center mb-8 tracking-wide">
            {cat.theme ? cat.theme : "Not Available"}
          </p>
        </div>

        <div className="flex items-center mb-8">
          <strong className="sm:text-xl md:text-2xl font-bold text-center mb-8 tracking-wide">
            Medium / Material : &nbsp;{" "}
          </strong>
          <p className="text-3xl sm:text-lg md:text-xl font-bold text-center mb-8 tracking-wide">
            {cat.medium ? cat.medium : "Not Available"}
          </p>
        </div>

        <div className="flex items-center mb-8">
          <strong className="sm:text-xl md:text-2xl font-bold text-center mb-8 tracking-wide">
            Image Created On : &nbsp;{" "}
          </strong>
          <p className="text-3xl sm:text-lg md:text-xl font-bold text-center mb-8 tracking-wide">
            {new Date(cat.created_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {cat.is_for_sale ? (
          <div className="flex items-center mb-8">
            <strong className="sm:text-xl md:text-2xl font-bold text-center mb-8 tracking-wide">
              For Sale, &nbsp;
            </strong>
            <p className="text-3xl sm:text-lg md:text-xl font-bold text-center mb-8 tracking-wide">
              <strong className="sm:text-xl md:text-2xl font-bold text-center mb-8 tracking-wide">
                Price : &nbsp;{" "}
              </strong>
              {cat.price} USD
            </p>
          </div>
        ) : (
          <p className="text-3xl sm:text-lg md:text-xl font-bold text-center mb-8 tracking-wide">
            <strong className="sm:text-xl md:text-2xl font-bold text-center mb-8 tracking-wide">
              Not For Sale
            </strong>
          </p>
        )}

        <div className="flex flex-wrap mb-4 justify-center">
          <Link
            to={`/art/${cat.id}`}
            className="mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FilterTheme;
