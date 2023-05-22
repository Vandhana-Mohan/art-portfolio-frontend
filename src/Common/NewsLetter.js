import React, { useState } from "react";
import { FaEnvelope, FaUser } from "react-icons/fa";

function Newsletter() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for subscribing to our newsletter.`);
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg">
      <div className="w-full max-w-md p-6 bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg">
        <h1 className="text-6xl sm:text-2xl md:text-4xl font-semibold text-center text-white uppercase tracking-wide mb-4">
          Subscribe to fun
        </h1>
        <p className="text-white text-lg font-bold text-center mb-6">
          Stay Creative with Art
        </p>
        <p className="text-white text-lg font-bold text-center mb-6">
          See the latest updates, events, and much more!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="flex items-center text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
            >
              <FaUser className="mr-2 text-2xl" />
              <span className="text-lg tracking-wide font-semibold">
                First Name
              </span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-3xl font-bold tracking-wide"
              name="firstName"
              id="first-name"
              placeholder="Enter your First Name"
              style={{
                fontFamily: "'Anonymous Pro', monospace",
                fontSize: "14px",
                color: "black",
              }}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              autoFocus
              required
              title="Enter your First Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="flex items-center text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
            >
              <FaUser className="mr-2 text-2xl" />
              <span className="text-lg tracking-wide font-semibold">
                Last Name
              </span>
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-3xl font-bold tracking-wide"
              name="lastName"
              id="last-name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Enter your Last Name"
              style={{
                fontFamily: "'Anonymous Pro', monospace",
                fontSize: "14px",
                color: "black",
              }}
              required
              title="Enter your Last Name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="flex items-center text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
            >
              <FaEnvelope className="mr-2 text-2xl" />
              <span className="text-lg tracking-wide font-semibold">Email</span>
            </label>
            <input
              type="email"
              className="border border-gray-300 rounded-md px-3 py-2 relative shadow outline-none focus:outline-none focus:ring lg:w-full text-6xl sm:text-2xl md:text-3xl font-bold tracking-wide"
              id="email"
              placeholder="Enter your Email"
              style={{
                fontFamily: "'Anonymous Pro', monospace",
                fontSize: "14px",
                color: "black",
              }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              title="Enter your email"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="mt-6 px-8 py-4 bg-gray-300 font-bold text-center text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
            >
              SIGN UP NOW
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
