import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { RiMailLine, RiLockPasswordLine } from "react-icons/ri";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(event) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
      <form className="shadow-md rounded mt-8">
      <div className="mb-4">
       
          <label htmlFor="email" className="flex items-center text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <RiMailLine className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoFocus
            required
            className="input"
            title="Enter your email"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <RiLockPasswordLine className="w-5 h-5 text-gray-500" />
          </div>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
            className="input"
            title="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
export default SignIn;
