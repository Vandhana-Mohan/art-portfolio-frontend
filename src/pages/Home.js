import { Link } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";

function Home() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 p-6">
      <div className="max-w-screen-xl">
        <h1 className="text-6xl sm:text-2xl md:text-4xl font-bold tracking-wider text-center mb-8 text-black">
          A Boundless Canvas for Visionaries: A Haven for Creative Artistry
        </h1>
        <CarouselComponent />
        <div className="text-center mt-8 p-8 w-full py-20">
          <h1 className="text-6xl sm:text-2xl md:text-4xl font-bold text-black tracking-wide">
            Create your Online Portfolio
          </h1>
          <p className="text-black text-xl md:text-lg sm:text-xl mt-4">
            An easy-to-use portfolio builder to showcase your work
          </p>
          <Link to="/SignIn">
            <button
              type="button"
              className="mt-6 bg-gray-300 px-8 py-4 text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Get Started Now &rarr;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
