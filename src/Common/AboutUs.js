import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="mx-auto px-4 py-10 max-w-lg rounded-lg shadow-lg shadow-red-500/50 border shadow-md">
      <h1 className="text-4xl font-bold tracking-wide text-gray-900 text-center">
        Artistic Universe
      </h1>
      <h2 className="mt-6 text-2xl font-semibold text-center text-gray-600">
        - Our Mission -
      </h2>
      <p className="mt-6 text-lg text-gray-700">
        At Artistic Universe, our mission is to provide a platform for
        showcasing and sharing your art collections, portraits, and images.
        Whether you're a professional artist or an art enthusiast, our website
        offers a seamless experience to explore and engage with art.
      </p>
      <p className="mt-6 text-lg text-gray-700">
        Join our vibrant community of artists and art lovers to unleash your
        creativity. Discover inspiring artworks, connect with fellow artists,
        and build your online portfolio.
      </p>
      <div className="flex">
        <Link to="/index">
          <button className="mt-10 mx-auto bg-red-500 hover:bg-red-600 text-white text-2xl font-bold py-3 px-6 rounded-lg shadow-md">
            Start Exploring 🎨 🖌️ ✨
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
