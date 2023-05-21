function FilterButtons() {
  return (
    <div className="flex flex-wrap items-center p-4 m-4">
      <h2 className="mr-2 text-black text-2xl font-bold py-2 px-4 rounded-lg">
        Filter:
      </h2>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-2">
        All
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Art
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Creative Direction
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Design
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Designer
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Graphic Design
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Illustration
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Marketing
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Sports
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Photography
      </button>
      <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg m-1">
        Architecture
      </button>
    </div>
  );
}

export default FilterButtons;

/*

.search-option-button:hover {
  background-color: rgba(227, 226, 227);
  box-shadow: 2px 2px 8px 4px grey;
  cursor: pointer;
  transition: box-shadow 0.5s ease-in;
}
*/
