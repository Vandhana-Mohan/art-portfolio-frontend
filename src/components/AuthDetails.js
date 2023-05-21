import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

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
        <div className="flex items-center">
          <img alt="Profile" className="w-10 h-10 rounded-full mr-2" />
          {/* src={profilePic}  */}
          <p className="text-blue-500">Signed in as {authUser.email}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={userSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
            <FaUser className="text-red text-3xl sm:text-4xl animate-pulse mb-2 mr-2" />

            <div className="text-red-600 text-lg">
              <Link
                to="/SignIn"
                className="text-red-600 text-lg hover:text-red-700 hover:underline"
              >
                Already a member? Log In
              </Link>
            </div>
            <div className="text-red-600 text-lg">
              <Link
                className="text-red-600 text-lg hover:text-red-700 hover:underline"
                to="/SignUp"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default AuthDetails;
