import Vandhana from "../assets/vandhana.jpeg";

function Developer() {
  const developers = [
    {
      name: "Vandhana Mohan",
      photo: Vandhana,
      bio: "I am a full-stack web developer who loves crafting beautiful and intuitive user experiences.",
      hobbies: "I love traveling and gardening.",
      github: "https://github.com/Vandhana-Mohan",
      linkedin: "https://www.linkedin.com/in/vandhanamohan/",
      funFact: "I am scared of doctors.",
    },
  ];

  return (
    <div className="mx-6 px-4 py-10 rounded-lg bg-gray-100 shadow-md">
      <h1 className="text-3xl font-bold tracking-wide text-gray-900 mb-8 text-center">
        About Artistic Universe Developer
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex"
          >
            <img
              className="w-1/2 rounded-l-lg"
              src={developer.photo}
              alt={developer.name}
            />
            <div className="px-6 py-4 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-2xl mb-2">{developer.name}</h2>
                <p className="text-gray-800 text-base max-w-md mb-4">
                  <span className="font-bold text-xl px-2 py-1 rounded mr-2">
                    About me:
                  </span>
                  {developer.bio}
                </p>
                <p className="text-gray-800 text-base max-w-md mb-4">
                  <span className="font-bold text-xl  px-2 py-1 rounded mr-2">
                    Hobbies:
                  </span>
                  {developer.hobbies}
                </p>
                <p className="text-gray-800 text-base max-w-md mb-4">
                  <span className="font-bold text-xl px-2 py-1 rounded mr-2">
                    Fun fact:
                  </span>
                  {developer.funFact}
                </p>
              </div>
              <div className="flex justify-end">
                <a
                  href={developer.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-gray-900 mr-4"
                >
                  <i className="fab fa-github fa-2x"></i>
                </a>
                <a
                  href={developer.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-500 hover:text-gray-900"
                >
                  <i className="fab fa-linkedin-in fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developer;
