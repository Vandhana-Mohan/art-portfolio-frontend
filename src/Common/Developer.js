import Vandhana from "../assets/vandhana.jpeg";
import { Link } from "react-router-dom";

function Developer() {
  const developers = [
    {
      name: "Vandhana Mohan",
      photo: Vandhana,
      bio: "I am a full-stack web developer passionate about creating stunning and user-friendly web experiences.",
      hobbies: "I enjoy traveling and gardening.",
      github: "https://github.com/Vandhana-Mohan",
      linkedin: "https://www.linkedin.com/in/vandhanamohan/",
      funFact: "I am afraid of doctors and medicines.",
    },
  ];

  return (
    <div className="py-8 mx-auto px-4 py-10 max-w-xl bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg">
      <h1 className="text-6xl sm:text-2xl md:text-4xl font-semibold text-center text-white uppercase tracking-wide mb-4">
        Artistic Universe Developer
      </h1>
      <div className="flex justify-center bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="max-w-md mx-4 bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg overflow-hidden"
          >
            <img
              className="w-1/2 h-auto object-cover rounded-l-lg"
              src={developer.photo}
              alt={developer.name}
            />
            <div className="px-6 py-4">
              <div>
                <h2 className="text-6xl sm:text-2xl md:text-4xl font-semibold text-center text-white uppercase tracking-wide mb-4">
                  {developer.name}
                </h2>
                <p
                  className="text-2xl sm:text-lg md:text-xl text-center mb-8 capitalize"
                  style={{ fontFamily: "'Anonymous Pro', monospace" }}
                >
                  <span className="font-semibold text-2xl tracking-wide">
                    About Me:
                  </span>{" "}
                  {developer.bio}
                </p>
                <p
                  className="text-2xl sm:text-lg md:text-xl text-center mb-8 capitalize"
                  style={{ fontFamily: "'Anonymous Pro', monospace" }}
                >
                  <span className="text-2xl sm:text-lg md:text-xl text-center mb-8 capitalize tracking-wide">
                    Hobbies:
                  </span>{" "}
                  {developer.hobbies}
                </p>
                <p
                  className="text-2xl sm:text-lg md:text-xl text-center mb-8 capitalize"
                  style={{ fontFamily: "'Anonymous Pro', monospace" }}
                >
                  <span className="text-2xl sm:text-lg md:text-xl text-center mb-8 capitalize tracking-wide">
                    Fun Fact:
                  </span>{" "}
                  {developer.funFact}
                </p>
              </div>
            </div>
            <div className="px-6 py-4 flex justify-end">
              <Link
                to="/{developer.github}"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 mr-4"
              >
                <i className="fab fa-github fa-2x"></i>
              </Link>
              <Link
                to="/{developer.linkedin}"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <i className="fab fa-linkedin-in fa-2x"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developer;
