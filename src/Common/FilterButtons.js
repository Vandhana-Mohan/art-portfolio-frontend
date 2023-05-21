import React, { useState, useEffect } from "react";

function FilterButtons() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("API_URL");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFilter = (filterCriteria) => {
    const filteredResults = data.filter((item) => {
      // Filter based on your criteria
      // For example, if the item has a property called 'category'
      return item.category === filterCriteria;
    });
    setFilteredData(filteredResults);
  };

  return (
    <div className="flex flex-wrap items-center p-4 m-4">
      <h2 className="mr-2 text-black text-2xl font-bold py-2 px-4 rounded-lg">
        Filter:
      </h2>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-2"
        onClick={() => handleFilter("all")}
      >
        All
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Art
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Creative Direction
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Design
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Designer
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Graphic Design
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Illustration
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Marketing
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Sports
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Photography
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => handleFilter("art")}
      >
        Architecture
      </button>
    </div>
  );
}

export default FilterButtons;
