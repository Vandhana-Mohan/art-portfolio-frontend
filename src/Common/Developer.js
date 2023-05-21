import Vandhana from "../assets/vandhana.jpeg";

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
    <div className="py-8 mx-auto px-4 py-10 max-w-lg rounded-lg shadow-lg shadow-red-500/50 border shadow-md"> 
      <h1 className="text-4xl font-bold tracking-wide text-gray-900 text-center mb-8">
        Artistic Universe Developer
      </h1>
      <div className="flex justify-center">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="max-w-md mx-4 bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              className="w-1/2 h-auto object-cover rounded-l-lg"
              src={developer.photo}
              alt={developer.name}
            />
            <div className="px-6 py-4">
              <div>
                <h2 className="text-center font-bold mb-2 text-2xl tracking-wide">{developer.name}</h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-2xl tracking-wide">About Me:</span>{" "}
                  {developer.bio}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-2xl tracking-wide">Hobbies:</span>{" "}
                  {developer.hobbies}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-2xl tracking-wide">Fun Fact:</span>{" "}
                  {developer.funFact}
                </p>
              </div>
            </div>
            <div className="px-6 py-4 flex justify-end">
              <a
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 mr-4"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>
              <a
                href={developer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900"
              >
                <i className="fab fa-linkedin-in fa-2x"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developer;


