import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaUser } from "react-icons/fa";

function AuthDetails() {
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
    signOut(auth)
      .then(() => {
        console.log("Signed Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
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
        <p>Signed out successfully!</p>
      )}
    </div>
  );
}
export default AuthDetails;
