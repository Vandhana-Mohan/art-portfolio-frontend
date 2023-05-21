import { useState } from "react";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <h1>Log In</h1>
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SignIn;
