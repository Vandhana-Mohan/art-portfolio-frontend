import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PortraitNewForm() {
  let navigate = useNavigate();

  const [newPortrait, setNewPortrait] = useState({
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
      .post(`${process.env.REACT_APP_API_URL}/groceries`, newPortrait)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("2345", error);
        navigate("/not-found");
      });
  }

  function handleTextChange(event) {
    setNewPortrait({ ...newPortrait, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setNewPortrait({ ...newPortrait, is_organic: event.target.checked });
  }

  function handleUnitChange(event) {
    const { value } = event.target;
    setNewPortrait((prev) => ({ ...prev, unit: value }));
  }

  function handleCategoryChange(event) {
    const { value } = event.target;
    if (value === "addCategory") {
      const newCategory = prompt("Enter the name of the new category:");
      if (newCategory) {
        setCategories([...categories, newCategory]);
        setNewPortrait((prev) => ({
          ...prev,
          category: newCategory,
        }));
      }
    } else {
      setNewPortrait((prev) => ({
        ...prev,
        category: value,
      }));
    }
  }

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-3/4">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            First Name: (Required)
          </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter your first name : "
            title="First Name is required"
            onChange={handleTextChange}
            value={newPortrait.name}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>
        <div className="flex flex-col w-3/4">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Last Name: (Required)
          </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter your last name : "
            title="Last Name is required"
            onChange={handleTextChange}
            value={newPortrait.name}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Profession:
          </label>
          <input
            id="name"
            type="text"
            autoFocus
            placeholder="Enter the name of product:"
            title="Name of the Product is required"
            onChange={handleTextChange}
            value={newPortrait.profession}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Location: (Required)
          </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter the name of product:"
            title="Name of the Product is required"
            onChange={handleTextChange}
            value={newPortrait.location}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="image_url" className="mb-1 font-medium text-gray-700">
            Your Instagram link : (Optional)
          </label>
          <input
            id="image_url"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={newPortrait.instagram}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="image_url" className="mb-1 font-medium text-gray-700">
            Your Instagram link : (Optional)
          </label>
          <input
            id="youtube"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={newPortrait.youtube}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="image_url" className="mb-1 font-medium text-gray-700">
            Your Facebook link : (Optional)
          </label>
          <input
            id="image_url"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={newPortrait.facebook}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="image_url" className="mb-1 font-medium text-gray-700">
            Your TikTok link : (Optional)
          </label>
          <input
            id="image_url"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={newPortrait.tik_tok}
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
            value={newPortrait.about_artist}
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
}

export default PortraitNewForm;
