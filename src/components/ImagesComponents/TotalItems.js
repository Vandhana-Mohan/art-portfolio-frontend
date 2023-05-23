import { useState, useEffect } from "react";
function TotalItems() {
  const [totalItems, setTotalItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/artworks/images`)
      .then((res) => res.json())
      .then((data) => {
        setTotalItems(data);
        setTotal(data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex items-center bg-transparent text-black rounded text-xl font-bold mb-6">
      <h1 className="flex-1 text-2xl font-bold whitespace-nowrap">
        Total Items in Collection: {total}
      </h1>
    </div>
  );
}
export default TotalItems;
