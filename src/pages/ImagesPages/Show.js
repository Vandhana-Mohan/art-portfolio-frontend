import PortraitDetails from "../../components/ImagesComponents/PortraitDetails";

function Show() {
  return (
    <div className="items-center mx-auto px-4 py-3 justify-center bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500 mt-4">
      <div className="p-6 m-2 rounded-lg shadow-yellow-500/50 shadow-lg">
        <h1 className="text-3xl sm:text-xl md:text-2xl lg:text-4xl font-bold text-white text-center">
          View Details
        </h1>
        <PortraitDetails />
      </div>
    </div>
  );
}

export default Show;
