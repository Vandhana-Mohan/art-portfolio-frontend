import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewCollectionForm() {
  let navigate = useNavigate();

  const [newPortrait, setNewPortrait] = useState({
    title: "",
    price: 0,
    is_for_sale: false,
    description: "",
    image_url: "",
    medium: "",
    created_at: "",
  });

  function handleCheckboxChange(event) {
    setNewPortrait({ ...newPortrait, is_for_sale: event.target.checked });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/artworks/user`, newPortrait)
      .then(() => {
        navigate("/index");
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }

  function handleTextChange(event) {
    setNewPortrait({ ...newPortrait, [event.target.id]: event.target.value });
  }

  return (
    <div className="p-6 m-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-3/4">
          <label htmlFor="title" className="mb-1 font-medium text-gray-700">
            Title: (Required)
          </label>
          <input
            id="title"
            type="text"
            required
            autoFocus
            placeholder="Enter the title:"
            title="Title is required"
            onChange={handleTextChange}
            value={newPortrait.title}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label
            htmlFor="description"
            className="mb-1 font-medium text-gray-700"
          >
            Description: (Optional)
          </label>
          <input
            id="description"
            type="text"
            placeholder="Enter the description:"
            title="Description of the image"
            onChange={handleTextChange}
            value={newPortrait.description}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="image_url" className="mb-1 font-medium text-gray-700">
            URL link of the Image: (Required)
          </label>
          <input
            id="image_url"
            type="text"
            onChange={handleTextChange}
            required
            placeholder="Enter the URL link of the image:"
            title="URL image link of the image -- required"
            value={newPortrait.image_url}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex items-center">
          <input
            id="is_for_sale"
            type="checkbox"
            title="Check if the product is for sale -- optional"
            onChange={handleCheckboxChange}
            className="rounded text-primary-600 mr-2"
          />
          <label
            htmlFor="is_for_sale"
            className="mb-1 font-medium text-gray-700"
          >
            For Sale (Optional - Default Not For Sale)
          </label>
        </div>
        {newPortrait.is_for_sale && (
          <div className="flex flex-col w-3/4">
            <label htmlFor="price" className="mb-1 font-medium text-gray-700">
              Price: (Optional)
            </label>
            <input
              id="price"
              type="number"
              min="0"
              step="0.01"
              onChange={handleTextChange}
              value={newPortrait.price}
              placeholder="Enter the price 0.00 - no $ sign needed"
              title="Price of the item for sale"
              className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
            />
          </div>
        )}
        <div className="flex flex-col w-3/4">
          <label
            htmlFor="created_at"
            className="mb-1 font-medium text-gray-700"
          >
            Date Created: (Optional)
          </label>
          <input
            id="created_at"
            type="date"
            onChange={handleTextChange}
            value={newPortrait.created_at}
            placeholder="Enter the date created - (Optional - Default Today's Date)"
            title="Enter the date the image was created"
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="medium" className="mb-1 font-medium text-gray-700">
            Medium / Material: (Optional)
          </label>
          <input
            id="medium"
            type="text"
            placeholder="Enter your medium or materials used:"
            title="What is the medium or material used?"
            onChange={handleTextChange}
            value={newPortrait.medium}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
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

export default NewCollectionForm;