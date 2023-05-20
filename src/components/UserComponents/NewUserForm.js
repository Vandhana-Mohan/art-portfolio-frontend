import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewUserForm() {
  /*
  let navigate = useNavigate();

  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    about_artist: "",
    profession: "",
    location: "",
    instagram: "",
    facebook: "",
    tik_tok: "",
    youtube: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/artworks/user`, newUser)
      .then(() => {
        navigate("/index");
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }

  function handleTextChange(event) {
    setNewUser({ ...newUser, [event.target.id]: event.target.value });
  }

 
  return (
    <div className="p-6 m-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-3/4">
          <label
            htmlFor="first_name"
            className="mb-1 font-medium text-gray-700"
          >
            First Name: (Required)
          </label>
          <input
            id="first_name"
            type="text"
            required
            autoFocus
            placeholder="Enter your first name : "
            title="First Name is required"
            onChange={handleTextChange}
            value={newUser.first_name}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>
        <div className="flex flex-col w-3/4">
          <label htmlFor="last_name" className="mb-1 font-medium text-gray-700">
            Last Name: (Required)
          </label>
          <input
            id="last_name"
            type="text"
            required
            placeholder="Enter your last name : "
            title="Last Name is required"
            onChange={handleTextChange}
            value={newUser.last_name}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label
            htmlFor="profession"
            className="mb-1 font-medium text-gray-700"
          >
            Profession: (Optional)
          </label>
          <input
            id="profession"
            type="text"
            placeholder="Enter your profession : "
            title="What is your profession? "
            onChange={handleTextChange}
            value={newUser.profession}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="location" className="mb-1 font-medium text-gray-700">
            Location: (Required)
          </label>
          <input
            id="location"
            type="text"
            required
            placeholder="Enter your location : "
            title="Which country do you belong to ? "
            onChange={handleTextChange}
            value={newUser.location}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="instagram" className="mb-1 font-medium text-gray-700">
            Your Instagram link : (Optional)
          </label>
          <input
            id="instagram"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of your instagram :"
            title="URL link of your instagram -- optional"
            value={newUser.instagram}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="youtube" className="mb-1 font-medium text-gray-700">
            Your Youtube link : (Optional)
          </label>
          <input
            id="youtube"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={newUser.youtube}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="facebook" className="mb-1 font-medium text-gray-700">
            Your Facebook link : (Optional)
          </label>
          <input
            id="facebook"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={newUser.facebook}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="tik_tok" className="mb-1 font-medium text-gray-700">
            Your TikTok link : (Optional)
          </label>
          <input
            id="tik_tok"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={newUser.tik_tok}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label
            htmlFor="about_artist"
            className="mb-1 font-medium text-gray-700"
          >
            About You : (Optional)
          </label>
          <textarea
            id="about_artist"
            rows="10"
            title="A few words about you -- optional"
            placeholder="Enter a few words about you:"
            onChange={handleTextChange}
            value={newUser.about_artist}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          ></textarea>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
          >
            Cancel
          </button>
          <button
            type="reset"
            className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
          >
            {" "}
            Reset
          </button>
        </div>
      </form>
    </div>
  );
  */
  return null;
}

export default NewUserForm;
