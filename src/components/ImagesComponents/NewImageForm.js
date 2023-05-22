import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewImageForm() {
  let navigate = useNavigate();

  const [newPortrait, setNewPortrait] = useState({
    title: "",
    theme: "All",
    price: 0,
    is_for_sale: false,
    description: "",
    image_url: "",
    medium: "",
    created_at: new Date().toISOString(), // Set the default value to the current date
  });

  const [theme, setTheme] = useState([
    "Art",
    "Creative Direction",
    "Design",
    "Designer",
    "Graphic Design",
    "Illustration",
    "Marketing",
    "Sports",
    "Photography",
    "Architecture",
    "Fashion",
  ]);

  function handleCheckboxChange(event) {
    setNewPortrait({ ...newPortrait, is_for_sale: event.target.checked });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/artworks/images`, newPortrait)
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

  function handleThemeChange(event) {
    const { value } = event.target;
    if (value === "addTheme") {
      const newTheme = prompt("Enter the theme:");
      if (newTheme) {
        setTheme([...theme, newTheme]);
        setNewPortrait((prev) => ({
          ...prev,
          theme: newTheme,
        }));
      }
    } else {
      setNewPortrait((prev) => ({
        ...prev,
        theme: value,
      }));
    }
  }

  return (
    <div className="p-6 m-6 bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <div className="flex flex-col w-full">
          <label
            htmlFor="title"
            className="mb-1 text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
          >
            Title: ( Required )
          </label>
          <input
            id="title"
            type="text"
            required
            autoFocus
            placeholder="Enter the title:"
            style={{
              fontFamily: "'Anonymous Pro', monospace",
              fontSize: "20px",
              color: "black",
            }}
            title="Title is required"
            onChange={handleTextChange}
            value={newPortrait.title}
            className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-3xl font-bold tracking-wide"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="description"
            className="mb-1 text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
          >
            Description: ( Optional )
          </label>
          <input
            id="description"
            type="text"
            placeholder="Enter the description:"
            style={{
              fontFamily: "'Anonymous Pro', monospace",
              fontSize: "20px",
              color: "black",
            }}
            title="Description of the image"
            onChange={handleTextChange}
            value={newPortrait.description}
            className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-3xl font-bold tracking-wide"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="theme"
            className="mb-1 text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
          >
            Theme : ( Optional )
          </label>
          <select
            id="theme"
            value={newPortrait.theme}
            title="Choose theme - optional"
            onChange={handleThemeChange}
            className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-xl font-bold tracking-wide"
          >
            <option value="">-- Choose a theme --</option>
            {theme.map((theme) => (
              <option key={theme} value={theme}>
                {theme}
              </option>
            ))}
            <option value="addTheme">Add new theme</option>
          </select>
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="image_url"
            className="mb-1 text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
          >
            URL link of the Image: ( Required )
          </label>
          <input
            id="image_url"
            type="text"
            onChange={handleTextChange}
            required
            placeholder="Enter the URL link of the image:"
            style={{
              fontFamily: "'Anonymous Pro', monospace",
              fontSize: "20px",
              color: "black",
            }}
            title="URL image link of the image -- required"
            value={newPortrait.image_url}
            className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-3xl font-bold tracking-wide"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="created_at"
            className="mb-1 text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
          >
            Date Created: ( Optional )
          </label>
          <input
            id="created_at"
            type="date"
            onChange={handleTextChange}
            value={newPortrait.created_at}
            placeholder="Enter the date created - (Optional)"
            style={{
              fontFamily: "'Anonymous Pro', monospace",
              fontSize: "20px",
              color: "black",
            }}
            title="Enter the date the image was created"
            className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-3xl font-bold tracking-wide"
          />
        </div>

        <div className="flex flex-col w-full">
          <label
            htmlFor="medium"
            className="mb-1 text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
          >
            Medium / Material: ( Optional )
          </label>
          <input
            id="medium"
            type="text"
            placeholder="Enter medium or materials used:"
            style={{
              fontFamily: "'Anonymous Pro', monospace",
              fontSize: "20px",
              color: "black",
            }}
            title="What is the medium or material used?"
            onChange={handleTextChange}
            value={newPortrait.medium}
            className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-3xl font-bold tracking-wide"
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
            className="mb-1 text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
          >
            For Sale ( Optional )
          </label>
        </div>
        {newPortrait.is_for_sale && (
          <div className="flex flex-col w-full">
            <label
              htmlFor="price"
              className="mb-1 text-6xl sm:text-2xl md:text-2xl font-bold tracking-wide capitalize"
            >
              Price: ( Optional )
            </label>
            <input
              id="price"
              type="number"
              min="0"
              step="0.01"
              onChange={handleTextChange}
              value={newPortrait.price}
              placeholder="Enter the price 0.00 - no $ sign needed"
              style={{
                fontFamily: "'Anonymous Pro', monospace",
                fontSize: "20px",
                color: "black",
              }}
              title="Price of the item for sale"
              className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-3xl font-bold tracking-wide"
            />
          </div>
        )}

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="mt-4 text-xl tracking-wider font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/index")}
            className="mt-4 text-xl tracking-wider font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            type="reset"
            className="mt-4 text-xl tracking-wider font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
          >
            {" "}
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewImageForm;
