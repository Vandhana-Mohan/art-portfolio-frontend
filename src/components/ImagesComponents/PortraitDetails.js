import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function PortraitDetails() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [showImage, setShowImage] = useState({
    title: "",
    theme: "All",
    price: 0,
    is_for_sale: false,
    description: "",
    image_url: "",
    medium: "",
    created_at: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/artworks/images/${id}`)
        .then((response) => {
          setShowImage(response.data);
        })
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });
    }
  }, [id, navigate]);

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this item?")) {
      fetch(`${process.env.REACT_APP_API_URL}/artworks/images/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500">
      <div className="p-6 m-6 rounded-lg shadow-yellow-500/50 shadow-lg">
        <h2 className="text-6xl sm:text-2xl md:text-4xl font-bold text-center mb-8 tracking-wide capitalize">
          {showImage.title}
        </h2>
        <div className="flex items-center mb-8">
          <strong className="text-6xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            Theme : &nbsp;
          </strong>

          <p
            className="text-6xl sm:text-2xl md:text-3xl text-center mb-8 capitalize"
            style={{ fontFamily: "'Anonymous Pro', monospace" }}
          >
            {showImage.theme ? showImage.theme : "All"}
          </p>
        </div>
        <div className="flex items-center mb-8">
          <strong className="text-6xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            Description : &nbsp;
          </strong>
          <p
            className="text-6xl sm:text-2xl md:text-3xl text-center mb-8 capitalize"
            style={{ fontFamily: "'Anonymous Pro', monospace" }}
          >
            {showImage.description ? showImage.description : "Not Available"}
          </p>
        </div>
        <div className="flex items-center mb-8">
          <strong className="text-6xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            Medium / Material : &nbsp;{" "}
          </strong>
          <p
            className="text-6xl sm:text-2xl md:text-3xl text-center mb-8 capitalize"
            style={{ fontFamily: "'Anonymous Pro', monospace" }}
          >
            {showImage.medium ? showImage.medium : "Not Available"}
          </p>
        </div>
        <div className="flex items-center mb-8">
          <strong className="text-6xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
            Image Created On : &nbsp;
          </strong>
          <p
            className="text-6xl sm:text-2xl md:text-3xl text-center mb-8 capitalize"
            style={{ fontFamily: "'Anonymous Pro', monospace" }}
          >
            {new Date(showImage.created_at).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        {showImage.is_for_sale ? (
          <>
            <div className="mb-4">
              <strong className="text-6xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
                For Sale{" "}
              </strong>
              <p
                className="text-6xl sm:text-2xl md:text-3xl text-center mb-8 capitalize"
                style={{ fontFamily: "'Anonymous Pro', monospace" }}
              >
                <strong className="text-6xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
                  Price:{" "}
                </strong>
                {showImage.price} USD
              </p>
            </div>
          </>
        ) : (
          <p
            className="text-6xl sm:text-2xl md:text-3xl text-center mb-8 capitalize"
            style={{ fontFamily: "'Anonymous Pro', monospace" }}
          >
            <strong className="text-6xl sm:text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
              Not For Sale
            </strong>
          </p>
        )}

        <div className="flex justify-end space-x-4">
          <button
            className="mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
            onClick={() => navigate(-1)}
          >
            Back
          </button>

          <button className="mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline">
            <Link to={`/art/images/${id}/edit`}>Edit</Link>
          </button>
          <button
            className="mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="p-6 m-6 bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500 rounded-lg shadow-yellow-500/50 shadow-lg relative">
        {showImage.image_url ? (
          <div>
            <img
              className="w-full h-auto object-cover max-w-max max-h-full"
              src={showImage.image_url}
              alt={showImage.title}
            />

            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500 rounded-lg shadow-yellow-500/50 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500 rounded-lg shadow-yellow-500/50 shadow-lg bg-opacity-0 hover:bg-opacity-75 transition duration-300">
                <img
                  className="w-full h-full object-contain bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500 rounded-lg shadow-yellow-500/50 shadow-lg hover:scale-150 transition duration-300"
                  src={showImage.image_url}
                  alt={showImage.title}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-96 h-96 flex items-center justify-center bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500 rounded-lg shadow-yellow-500/50 shadow-lg">
            <p className="text-white-500 font-bold text-xl text-center">
              No Image Available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortraitDetails;
