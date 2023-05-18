import { useState, useEffect } from "react";
import Portrait from "./Portrait";

function Portraits() {
  const [portrait, setPortrait] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/artworks/collection`)
      .then((response) => response.json())
      .then((data) => {
        setPortrait(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-green-500/50 border shadow-md">
      {portrait.map((item) => (
        <Portrait key={item.id} portrait={item} />
      ))}
    </div>
  );
}

export default Portraits;
