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
    <div className="bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase mb-4">
          Subscribe to all the fun
        </h1>
        <p className="text-gray-600 text-lg font-bold text-center mb-6">
          Stay Creative with Art
        </p>
        <p className="text-gray-600 text-lg font-bold text-center mb-6">
          See the latest updates, events, and much more!
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="flex items-center text-gray-800"
            >
              <FaUser className="mr-2 text-2xl" />
              <span className="text-lg tracking-wide font-semibold">
                First Name
              </span>
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-purple-300 focus:border-purple-400 focus:outline-none"
              name="firstName"
              id="first-name"
              placeholder="Enter your First Name"
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
              className="flex items-center text-gray-800"
            >
              <FaUser className="mr-2 text-2xl" />
              <span className="text-lg tracking-wide font-semibold">
                Last Name
              </span>
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-purple-300 focus:border-purple-400 focus:outline-none"
              name="lastName"
              id="last-name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Enter your Last Name"
              required
              title="Enter your Last Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="flex items-center text-gray-800">
              <FaEnvelope className="mr-2 text-2xl" />
              <span className="text-lg tracking-wide font-semibold">Email</span>
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-purple-300 focus:border-purple-400 focus:outline-none"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              title="Enter your email"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-lg tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
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
