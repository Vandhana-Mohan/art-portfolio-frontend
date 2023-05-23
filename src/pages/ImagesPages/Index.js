import Portraits from "../../components/ImagesComponents/Portraits";

function Index() {
  return (
    <div className="flex flex-col items-center m-6 p-6 w-full justify-center rounded-lg shadow-yellow-500/50 shadow-lg">
      <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-4xl tracking-wider font-bold text-black text-center mb-6">
        Build an Online Portfolio, just like these . . .
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-wide font-bold mb-6 text-black text-center">
        Click the thumbnails below to visit the portfolio . . .
      </p>
      <div className="max-w-4xl w-full">
        <Portraits />
      </div>
    </div>
  );
}

export default Index;
