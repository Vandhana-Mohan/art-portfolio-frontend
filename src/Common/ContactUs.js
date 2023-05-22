import { useState } from "react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Thank you, ${name}, for your message! We will get back to you soon.`
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg">
      <div className="w-full max-w-md p-6 bg-gradient-to-r from-yellow-200 via-pink-300 to-red-300 rounded-lg shadow-yellow-500/50 shadow-lg">
        <h1 className="text-6xl sm:text-2xl md:text-4xl font-semibold text-center text-white uppercase tracking-wide mb-4">
          Contact Us
        </h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="flex items-center text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter First Name"
              style={{
                fontFamily: "'Anonymous Pro', monospace",
                fontSize: "14px",
                color: "black",
              }}
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              title="Enter your First Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="flex items-center text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter Email"
              style={{
                fontFamily: "'Anonymous Pro', monospace",
                fontSize: "14px",
                color: "black",
              }}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              title="Enter your Last Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="flex items-center text-6xl sm:text-2xl md:text-xl font-bold tracking-wide capitalize"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Enter your message here"
              style={{
                fontFamily: "'Anonymous Pro', monospace",
                fontSize: "16px",
                color: "black",
              }}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="mt-6 px-8 py-4 font-bold text-center text-black text-2xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
