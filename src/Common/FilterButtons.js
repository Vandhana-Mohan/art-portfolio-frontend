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
          <h2 className="mr-2 text-black text-2xl font-bold py-2 px-4 rounded-lg">
            Filter:
          </h2>

          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-2"
            onClick={() => handleThemeClick("All")}
          >
            All
          </button>

          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Art")}
          >
            Art
          </button>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Creative Direction")}
          >
            Creative Direction
          </button>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Design")}
          >
            Design
          </button>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Designer")}
          >
            Fashion
          </button>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Graphic Design")}
          >
            Graphic Design
          </button>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Illustration")}
          >
            Illustration
          </button>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Marketing")}
          >
            Marketing
          </button>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Sports")}
          >
            Sports
          </button>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Photography")}
          >
            Photography
          </button>
          <button
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1"
            onClick={() => handleThemeClick("Architecture")}
          >
            Architecture
          </button>
        </>
      ) : null}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-green-500/50 border shadow-md">
        {theme
          ? filteredData.map((item) => <FilterTheme key={item.id} cat={item} />)
          : null}
      </div>
    </div>
  );
}

export default FilterButtons;
