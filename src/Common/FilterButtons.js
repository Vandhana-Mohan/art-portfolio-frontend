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
      {!theme ? (
        <>
          <div className="flex flex-wrap gap-4">
            <button
              className="mt-4 text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold focus:outline-none focus:shadow-outline rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md"
              onClick={() => handleThemeClick("Art")}
            >
              Art
            </button>
            <button
              className="mt-4 text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold focus:outline-none focus:shadow-outline rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md"
              onClick={() => handleThemeClick("Creative Direction")}
            >
              Creative Direction
            </button>
            <button
              className="mt-4 text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold focus:outline-none focus:shadow-outline rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md"
              onClick={() => handleThemeClick("Designer")}
            >
              Fashion
            </button>
            <button
              className="mt-4 text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold focus:outline-none focus:shadow-outline rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md"
              onClick={() => handleThemeClick("Graphic Design")}
            >
              Graphic Design
            </button>
            <button
              className="mt-4 text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold focus:outline-none focus:shadow-outline rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md"
              onClick={() => handleThemeClick("Sports")}
            >
              Sports
            </button>
            <button
              className="mt-4 text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold focus:outline-none focus:shadow-outline rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md"
              onClick={() => handleThemeClick("Photography")}
            >
              Photography
            </button>
            <button
              className="mt-4 text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold focus:outline-none focus:shadow-outline rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md"
              onClick={() => handleThemeClick("Architecture")}
            >
              Architecture
            </button>
          </div>
        </>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {theme
          ? filteredData.map((item) => <FilterTheme key={item.id} cat={item} />)
          : null}
      </div>
    </div>
  );
}

export default FilterButtons;
