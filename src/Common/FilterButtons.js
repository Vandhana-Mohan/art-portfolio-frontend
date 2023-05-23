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
    <div className="flex flex-wrap gap-4">
      {!theme ? (
        <>
          <button
            onClick={() => handleThemeClick("Art")}
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
          >
            Art
          </button>

          <button
            onClick={() => handleThemeClick("Food")}
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
          >
            Food
          </button>

          <button
            onClick={() => handleThemeClick("Family")}
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
          >
            Family
          </button>

          <button
            onClick={() => handleThemeClick("Design")}
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
          >
            Design
          </button>

          <button
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
            onClick={() => handleThemeClick("Creative Direction")}
          >
            Creative Direction
          </button>
          <button
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
            onClick={() => handleThemeClick("Designer")}
          >
            Fashion
          </button>
          <button
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
            onClick={() => handleThemeClick("Graphic Design")}
          >
            Graphic Design
          </button>
          <button
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
            onClick={() => handleThemeClick("Sports")}
          >
            Sports
          </button>
          <button
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
            onClick={() => handleThemeClick("Photography")}
          >
            Photography
          </button>
          <button
            className="text-xl tracking-wider font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline font-semibold hover:text-white hover:bg-yellow-500 hover:border-yellow-500"
            onClick={() => handleThemeClick("Architecture")}
          >
            Architecture
          </button>
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
