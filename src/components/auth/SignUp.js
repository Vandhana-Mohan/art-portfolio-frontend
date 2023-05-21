import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { FaEnvelope, FaLock } from "react-icons/fa";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="bg-red-100 p-8 rounded-lg">
      <div className="text-center">
        <h4 className="text-4xl font-bold mb-4">Create Account</h4>
      </div>
      <form onSubmit={signUp} className="shadow-md rounded mt-8">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="flex items-center text-gray-700 text-sm font-bold mb-2"
          >
            <FaEnvelope className="mr-2 text-2xl" />
            <span className="text-xl tracking-wide font-bold mb-2">Email</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
            required
            title="Enter your email"
            className="w-3/4 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="flex items-center text-gray-700 text-sm font-bold mb-2"
          >
            <FaLock className="mr-2 text-2xl" />
            <span className="text-xl tracking-wide font-bold mb-2">
              Password
            </span>
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            title="Enter your password"
            className="w-3/4 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/4 mt-4 px-4 py-4 font-bold text-xl text-white bg-indigo-600 rounded hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
