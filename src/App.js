// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Common
import AboutUs from "./Common/AboutUs";
import ContactUs from "./Common/ContactUs";
import Developer from "./Common/Developer";
import FilterButtons from "./Common/FilterButtons";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import Help from "./Common/Help";
import NavBar from "./Common/NavBar";
import Newsletter from "./Common/NewsLetter";

// Components
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

// Pages
import EditImage from "./pages/ImagesPages/EditImage";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Index from "./pages/ImagesPages/Index";
import NewImage from "./pages/ImagesPages/NewImage";
import Show from "./pages/ImagesPages/Show";

// Firebase
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
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

  return (
    <div className="bg-gradient-to-r from-yellow-200 via-pink-500 to-red-500">
      <BrowserRouter>
        <Header />
        <NavBar />
        <FilterButtons />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/developers" element={<Developer />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<FourOFour />} />

            {authUser ? (
              <>
                <Route path="/index" element={<Index />} />
                <Route path="/art/images/:id/edit" element={<EditImage />} />
                <Route path="/art/newImage" element={<NewImage />} />
                <Route path="/art/:id" element={<Show />} />
                <Route path="/filter/:theme" element={<FilterButtons />} />
              </>
            ) : (
              <>
                <Route
                  path="/"
                  element={
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
                      <div className="p-6 m-6 rounded-lg shadow-red-500/50 border shadow-lg">
                        <h1 className="m-6 text-center text-4xl font-bold">
                          Please Sign In . . .
                        </h1>
                      </div>
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
                  }
                />
              </>
            )}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
