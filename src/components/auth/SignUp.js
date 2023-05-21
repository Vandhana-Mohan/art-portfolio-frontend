import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function signUp(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/index");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          Create Account
        </h1>
        <form onSubmit={signUp} className="mt-6">
          
          <div className="mb-2">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-semibold text-gray-800"
            >
              <FaEnvelope className="mr-2 text-2xl" />
              <span className="text-xl tracking-wide font-bold">Email</span>
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoFocus
              required
              title="Enter your email"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="flex items-center text-sm font-semibold text-gray-800"
            >
              <FaLock className="mr-2 text-2xl" />
              <span className="text-xl tracking-wide font-bold">Password</span>
            </label>

            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              id="password"
              placeholder="Enter your Password"
              value={password}
              required
              onChange={(event) => setPassword(event.target.value)}
              title="Enter your password"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
