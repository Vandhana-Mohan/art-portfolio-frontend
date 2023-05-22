import { useNavigate } from "react-router-dom";
function FourOFour() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 p-6 m-6 py-24 rounded-lg shadow-yellow-500/50 shadow-lg">
      <h1 className="text-6xl sm:text-xl md:text-4xl font-bold text-white text-center">
        Please Sign In . . .
      </h1>
      <div className="flex justify-end space-x-4">
        <button
          className="mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default FourOFour;
