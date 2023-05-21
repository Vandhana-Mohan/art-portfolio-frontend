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
    <div className="mx-auto px-4 py-10 max-w-lg rounded-lg shadow-lg shadow-red-500/50 border shadow-md">
      <h1 className="text-4xl font-bold tracking-wide text-gray-900 text-center">
        Contact Us
      </h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Enter your message here"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>

        <div className="flex">
          <button
            className="mt-10 mx-auto bg-red-500 hover:bg-red-300 text-white text-2xl font-bold py-3 px-6 rounded-lg shadow-md"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
