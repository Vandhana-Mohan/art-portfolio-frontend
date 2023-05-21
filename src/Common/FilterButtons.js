import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FilterTheme from "../components/ImagesComponents/FilterTheme";

function FilterButtons() {
  const [selectedTheme, setSelectedTheme] = useState("");

  const { theme } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/artworks/images`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (theme) {
      const filtered = data.filter(
        (product) =>
          product.theme.includes(theme) ||
          product.description.includes(theme) ||
          product.title.includes(theme)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  }, [selectedTheme, data, theme]);

  const handleThemeClick = (theme) => {
    navigate(`/filter/${theme}`);
  };

  return (
    <div className="flex flex-wrap items-center p-4 m-4">
      <h2 className="mr-2 text-black text-2xl font-bold py-2 px-4 rounded-lg">
        Filter:
      </h2>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-2"
        onClick={() => setSelectedTheme("All")}
      >
        All
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Art")}
      >
        Art
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Creative Direction")}
      >
        Creative Direction
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Design")}
      >
        Design
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Designer")}
      >
        Fashion
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Graphic Design")}
      >
        Graphic Design
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Illustration")}
      >
        Illustration
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Marketing")}
      >
        Marketing
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Sports")}
      >
        Sports
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Photography")}
      >
        Photography
      </button>
      <button
        className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
        onClick={() => setSelectedTheme("Architecture")}
      >
        Architecture
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-green-500/50 border shadow-md">
        {theme
          ? filteredData.map((item) => <FilterTheme key={item.id} cat={item} />)
          : null}
      </div>
    </div>
  );
}

export default FilterButtons;

/*
  return (
    
    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {!category ? (
        <>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md ">
          <button
            className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide"
            onClick={() => handleCategoryClick("Dairy")}
          >
            Dairy
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button
            onClick={() => handleCategoryClick("Vegetables")}
            className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide"
          >
            Vegetables
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button
            onClick={() => handleCategoryClick("fruits")}
            className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide"
          >
            Fruits
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button
            onClick={() => handleCategoryClick("Bakery")}
            className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide"
          >
            Bakery
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide">
            Canned Goods
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide">
            Meat
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide">
            Beverages
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide ">
            Snacks
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-green-50 rounded-full w-40 h-40 flex items-center justify-center rounded-lg shadow-green-500/50 shadow-md">
          <button className="mt-2 font-bold text-black-100 text-center text-3xl tracking-wide">
            Frozen Foods
          </button>
        </div>
      </div>
      </>
      ) : null }
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-green-500/50 border shadow-md">
        {category
          ? filteredProducts.map((item) => (
              <FilterCategory key={item.id} cat={item} />
            ))
          : null}
      </div>
    </div>
  );
}




*/
