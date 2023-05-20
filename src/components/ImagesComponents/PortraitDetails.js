import { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";

function PortraitDetails() {
  let { id } = useParams();

  let navigate = useNavigate();

  const [showImage, setShowImage] = useState({
    title: "",
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
    if (window.confirm("Are you sure you want to delete this item ? ")) {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-4 p-6 m-6">
          <h2 className="text-2xl font-bold mb-2">
            <strong>Title:</strong>{" "}
            {showImage.title
              .split(" ")
              .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>

          <div className="flex items-center space-x-2">
            <h3 className="text-lg mb-2">
              <strong>Description:</strong>
            </h3>
            <p className="text-lg mb-2">
              {showImage.description
                ? showImage.description.charAt(0).toUpperCase() +
                  showImage.description.slice(1)
                : "Not Available"}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <h3 className="text-lg mb-2">
              <strong>Medium / Material :</strong>
            </h3>
            <p className="text-lg mb-2">
              {showImage.medium
                ? showImage.medium.charAt(0).toUpperCase() +
                  showImage.medium.slice(1)
                : "Not Available"}
            </p>
          </div>
          <h3 className="text-lg mb-2">
            <strong>Product Quantity:</strong> {showImage.quantity}
          </h3>
          <h3 className="text-lg mb-2">
            <strong>Unit:</strong>{" "}
            {showImage.unit ? showImage.unit : "Not Available"}
          </h3>
          {showImage.is_for_sale ? (
            <>
              <h3 className="text-lg mb-2">
                <strong>For Sale</strong>
              </h3>
              <h3 className="text-lg mb-2">
                <strong>Price:</strong> {showImage.price} USD
              </h3>
            </>
          ) : (
            <h3 className="text-lg mb-2">
              <strong>Not For Sale</strong>
            </h3>
          )}
        </div>

        <div className="flex justify-end space-x-4">
          <button className="bg-green-300 hover:bg-green-100 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-green-500/50 border shadow-md">
            <Link to="/index">Back</Link>
          </button>
          <button className="bg-green-300 hover:bg-green-100 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-green-500/50 border shadow-md">
            <Link to={`/artworks/images/${id}/edit`}>Edit</Link>
          </button>
          <button
            className="bg-green-300 hover:bg-green-100 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-green-500/50 border shadow-md"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="p-6 m-6 rounded-lg shadow-green-500/50 border shadow-lg relative flex justify-center">
        {showImage.image_url ? (
          <div>
            <img
              className="w-full h-auto object-cover max-w-max max-h-full"
              src={showImage.image_url}
              alt={showImage.title}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 transition duration-300">
                <img
                  className="w-full h-full object-contain hover:scale-150 transition duration-300"
                  src={showImage.image_url}
                  alt={showImage.title}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-96 h-96 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 font-bold text-xl text-center">
              No Image Available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PortraitDetails;
