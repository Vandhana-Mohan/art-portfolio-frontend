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
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <img
          alt="Profile"
          src={sana}
          className="w-24 h-24 rounded-full shadow-yellow-500/50 shadow-lg"
        />
        <Link
          to="/help"
          className="mt-2 px-8 py-2 text-black text-xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md font-bold flex items-center space-x-2"
        >
          <FaCog className="text-xl" />
          <span className="font-medium">Account Settings</span>
        </Link>
      
        <button
          className="mt-2 px-8 py-2 text-black text-xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md font-bold flex items-center space-x-2"
          onClick={userSignOut}
        >
          Sign Out
        </button>
      </div>
      
      ) : (
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div>
            <Link
              to="/SignIn"
              className="mt-2 px-8 py-2 text-black text-xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md font-bold flex items-center space-x-2"
            >
              Sign In
            </Link>
          </div>
          <div>
            <Link
              className="mt-2 px-8 py-2 text-black text-xl sm:text-lg md:text-xl font-semibold rounded-lg hover:from-pink-500 hover:to-yellow-500 hover:text-white shadow-yellow-500/50 shadow-md font-bold flex items-center space-x-2"
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
