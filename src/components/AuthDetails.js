import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import sana from "../assets/sana.jpg";
import { FaCog } from "react-icons/fa";

function AuthDetails() {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    if (window.confirm("Are you sure you want to sign out?")) {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      {authUser ? (
        <div className="flex items-center space-x-2">
          <img alt="Profile" src={sana} className="w-24 h-24 rounded-full" />
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded flex items-center space-x-2"
            onClick={userSignOut}
          >
            <FaCog className="text-xl" />
            <span className="font-medium">Account Settings</span>
          </button>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-4 rounded"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <div>
            <Link
              to="/SignIn"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign In
            </Link>
          </div>
          <div>
            <Link
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              to="/SignUp"
            >
              Create New Account
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthDetails;
