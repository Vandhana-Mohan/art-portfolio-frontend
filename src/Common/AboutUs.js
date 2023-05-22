import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="mx-auto px-4 py-10 max-w-lg bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-black-500/50 shadow-lg">
      <h1 className="text-6xl sm:text-2xl md:text-4xl font-semibold text-center text-white uppercase tracking-wide mb-4">
        Artistic Universe
      </h1>
      <h2 className="text-2xl sm:text-lg md:text-xl font-semibold text-center text-white uppercase tracking-wide mb-4">
        - Our Mission -
      </h2>
      <p
        className="text-2xl sm:text-lg md:text-xl text-center mb-8 capitalize"
        style={{ fontFamily: "'Anonymous Pro', monospace" }}
      >
        At Artistic Universe, our mission is to provide a platform for
        showcasing and sharing your art collections, portraits, and images.
        Whether you're a professional artist or an art enthusiast, our website
        offers a seamless experience to explore and engage with art.
      </p>
      <p
        className="text-2xl sm:text-lg md:text-xl text-center mb-8 capitalize"
        style={{ fontFamily: "'Anonymous Pro', monospace" }}
      >
        Join our vibrant community of artists and art lovers to unleash your
        creativity. Discover inspiring artworks, connect with fellow artists,
        and build your online portfolio.
      </p>
      <div className="flex">
        <Link to="/index">
          <button className="mt-6 px-8 py-4 font-bold text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg bg-gray-300 hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline">
            Start Exploring 🎨 🖌️ ✨
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AboutUs;
