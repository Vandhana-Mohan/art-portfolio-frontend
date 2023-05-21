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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="p-6 m-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-8 capitalize">
          {showImage.title}
        </h2>

        <div className="flex items-center mb-8">
          <strong className="text-lg">Theme : </strong>
          <p className="text-lg ml-2 capitalize">
            {showImage.theme ? showImage.theme : "All"}
          </p>
        </div>

        <div className="flex items-center mb-8">
          <strong className="text-lg">Description : </strong>
          <p className="text-lg ml-2 capitalize">
            {showImage.description ? showImage.description : "Not Available"}
          </p>
        </div>

        <div className="flex items-center mb-8">
          <strong className="text-lg">Medium / Material : </strong>
          <p className="text-lg ml-2capitalize">
            {showImage.medium ? showImage.medium : "Not Available"}
          </p>
        </div>

        <div className="flex items-center mb-8">
          <strong className="text-lg">Image Created On : &nbsp;</strong>
          <p className="text-lg">
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
              <strong className="text-lg">For Sale: </strong>
              <p className="text-lg">
                <strong>Price: </strong>
                {showImage.price} USD
              </p>
            </div>
          </>
        ) : (
          <p className="text-lg mb-4">
            <strong>Not For Sale</strong>
          </p>
        )}

        <div className="flex justify-end space-x-4">
          <button className="bg-green-300 hover:bg-green-100 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-green-500/50 border shadow-md">
            <Link to="/index">Back</Link>
          </button>
          <button className="bg-green-300 hover:bg-green-100 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-green-500/50 border shadow-md">
            <Link to={`/art/images/${id}/edit`}>Edit</Link>
          </button>
          <button
            className="bg-green-300 hover:bg-green-100 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-green-500/50 border shadow-md"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="p-6 m-6 bg-white rounded-lg shadow-lg relative">
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
