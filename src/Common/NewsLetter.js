import React, { useState } from "react";

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
    <div className="bg-gray-100 p-8 rounded-lg">
      <div className="text-center">
        <h4 className="text-4xl font-bold mb-4">Subscribe to all the fun</h4>
        <p className="text-gray-600 text-lg font-bold">
          Stay Creative with Art, see the latest updates, events, and much more!
        </p>
      </div>
      <form className="mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 md:pr-2">
            <input
              type="text"
              name="firstName"
              id="first-name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="First Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-2">
            <input
              type="text"
              name="lastName"
              id="last-name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Last Name"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="w-full p-2 border border-gray-300 rounded"
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/4 mt-4 px-4 py-4 font-bold text-xl text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            SIGN UP NOW
          </button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
