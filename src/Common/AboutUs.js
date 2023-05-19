import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="mx-auto px-4 py-10 max-w-lg rounded-lg shadow-red-500/50 border shadow-md">
      <h1 className="text-3xl font-bold tracking-wide text-gray-900">
        Welcome to Artistic Universe
      </h1>
      <p className="mt-6 text-lg text-justify text-gray-500">
        Artistic Universe is your platform to showcase and share your art
        collections, portraits, and images. Whether you're a professional artist
        or an art enthusiast, our website provides you with a seamless
        experience to explore and engage with art.
      </p>
      <p className="mt-6 text-lg text-justify text-gray-500">
        Join our vibrant community of artists and art lovers, and unleash your
        creativity. Discover inspiring artworks, connect with fellow artists,
        and build your online portfolio.
      </p>
      <Link to="/">
        <h2 className="mt-10 m-6 bg-red-300 hover:bg-red-100 text-2xl font-bold py-3 px-3 flex focus:outline-none focus:shadow-outline rounded-lg shadow-red-500/50 border shadow-md w-max">
          Start Exploring &nbsp;&nbsp;🎨 &nbsp;🖌️ &nbsp;✨
        </h2>
      </Link>
    </div>
  );
}

export default AboutUs;
