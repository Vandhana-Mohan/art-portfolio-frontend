import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";

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
    <div>
      <form onSubmit={signUp}>
        <h1>Create Account</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoFocus
          required
          title="Enter your email"
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
          title="Enter your password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
