import CarouselComponent from "./CarouselComponent";

function Home() {
  return (
    <div className="flex flex-col items-center bg-indigo-700">
      <h1 className="text-4xl font-bold text-center mb-8">
        A Boundless Canvas for Visionaries: A Haven for Creative Artistry
      </h1>
      <CarouselComponent />
      <div className="text-center mt-8 bg-blue-300 w-full py-20">
        <h1 className="text-6xl font-bold text-white tracking-wide">
          Create your Online Portfolio
        </h1>
        <p className="text-white text-xl mt-4">
          An easy-to-use portfolio builder to showcase your work
        </p>
        <button
          type="button"
          className="mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Get Started Now &rarr;
        </button>
      </div>
    </div>
  );
}

export default Home;
