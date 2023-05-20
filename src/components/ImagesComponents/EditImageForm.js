import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditImageForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [editPortrait, setEditPortrait] = useState({
    title: "",
    price: 0,
    is_for_sale: false,
    description: "",
    image_url: "",
    medium: "",
    created_at: "",
  });

  function handleTextChange(event) {
    setEditPortrait({ ...editPortrait, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setEditPortrait({ ...editPortrait, is_for_sale: event.target.checked });
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/artworks/images/${id}`)
      .then((res) => res.json())
      .then((data) => {
        delete data.id; // using this delete because of backend validation has no id
        setEditPortrait(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/artworks/images/${id}`, editPortrait)
      .then(() => {
        navigate(`/groceries/${id}`);
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }

  return (
    <div className="p-4" style={{ paddingBottom: "12rem" }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-1/2">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name of the product:
          </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter the name of product:"
            title="Name of the Product is required"
            onChange={handleTextChange}
            value={editPortrait.name}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="category" className="mb-1 font-medium text-gray-700">
            Category :
          </label>
          <select
            id="category"
            value={editPortrait.category}
            title="Choose category - optional"
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          >
            <option value="">-- Choose a category --</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            <option value="addCategory">Add new category</option>
          </select>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="image_url" className="mb-1 font-medium text-gray-700">
            URL (Image) link of the product :
          </label>
          <input
            id="image_url"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={editPortrait.image_url}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label
            htmlFor="description"
            className="mb-1 font-medium text-gray-700"
          >
            Description :
          </label>
          <textarea
            id="description"
            rows="2"
            title="Description of the Product -- optional"
            placeholder="Enter a description for the product:"
            onChange={handleTextChange}
            value={editPortrait.description}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          ></textarea>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="price" className="mb-1 font-medium text-gray-700">
            {" "}
            Price:
          </label>
          <input
            id="price"
            type="number"
            min="0"
            step="0.01"
            onChange={handleTextChange}
            value={editPortrait.price}
            placeholder="Enter price 0.00 - no $ sign needed"
            title="Price is required"
            required
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="quantity" className="mb-1 font-medium text-gray-700">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            min="0"
            step="0.01"
            onChange={handleTextChange}
            value={editPortrait.quantity}
            title="Quantity is required"
            placeholder="Enter the quantity: "
            required
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="unit" className="mb-1 font-medium text-gray-700">
            Unit:
          </label>
          <select
            id="unit"
            onChange={handleUnitChange}
            title="Choose unit -- optional"
            value={editPortrait.unit}
            className="lg:w-full py-2 px-3 rounded-md border relative bg-white  border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">-- Choose a unit --</option>
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <input
            id="is_organic"
            type="checkbox"
            title="Check if the product is organic -- optional"
            onChange={handleCheckboxChange}
            className="rounded text-primary-600 mr-2"
          />
          <label
            htmlFor="is_organic"
            className="mb-1 font-medium text-gray-700"
          >
            Organic
          </label>
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

export default EditImageForm;

/*



  

  function handleSubmit(event) {
    event.preventDefault();
    console.log("3233", editGrocery);
    // console.log(`${process.env.REACT_APP_API_URL}/groceries/${id}`);
    axios
      .put(`${process.env.REACT_APP_API_URL}/groceries/${id}`, editGrocery)
      .then(() => {
        navigate(`/groceries/${id}`);
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }

  return (
    <div className="p-4" style={{ paddingBottom: "12rem" }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-1/2">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name of the product:
          </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter the name of product:"
            title="Name of the Product is required"
            onChange={handleTextChange}
            value={editGrocery.name}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="category" className="mb-1 font-medium text-gray-700">
            Category :
          </label>
          <select
            id="category"
            value={editGrocery.category}
            title="Choose category - optional"
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          >
            <option value="">-- Choose a category --</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            <option value="addCategory">Add new category</option>
          </select>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="image_url" className="mb-1 font-medium text-gray-700">
            URL (Image) link of the product :
          </label>
          <input
            id="image_url"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={editGrocery.image_url}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label
            htmlFor="description"
            className="mb-1 font-medium text-gray-700"
          >
            Description :
          </label>
          <textarea
            id="description"
            rows="2"
            title="Description of the Product -- optional"
            placeholder="Enter a description for the product:"
            onChange={handleTextChange}
            value={editGrocery.description}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          ></textarea>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="price" className="mb-1 font-medium text-gray-700">
            {" "}
            Price:
          </label>
          <input
            id="price"
            type="number"
            min="0"
            step="0.01"
            onChange={handleTextChange}
            value={editGrocery.price}
            placeholder="Enter price 0.00 - no $ sign needed"
            title="Price is required"
            required
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="quantity" className="mb-1 font-medium text-gray-700">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            min="0"
            step="0.01"
            onChange={handleTextChange}
            value={editGrocery.quantity}
            title="Quantity is required"
            placeholder="Enter the quantity: "
            required
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="unit" className="mb-1 font-medium text-gray-700">
            Unit:
          </label>
          <select
            id="unit"
            onChange={handleUnitChange}
            title="Choose unit -- optional"
            value={editGrocery.unit}
            className="lg:w-full py-2 px-3 rounded-md border relative bg-white  border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">-- Choose a unit --</option>
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <input
            id="is_organic"
            type="checkbox"
            title="Check if the product is organic -- optional"
            onChange={handleCheckboxChange}
            className="rounded text-primary-600 mr-2"
          />
          <label
            htmlFor="is_organic"
            className="mb-1 font-medium text-gray-700"
          >
            Organic
          </label>
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

export default GroceryEditForm;

*/
