// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <NavBar />
        <FilterButtons />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/index" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/developers" element={<Developer />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/art/images/:id/edit" element={<EditImage />} />
            <Route path="/art/newCollection" element={<NewImage />} />
            <Route path="/art/newImage" element={<NewImage />} />
            <Route path="/art/:id" element={<Show />} />
            {/* <Route path="/filter" element={<FilterButtons />} /> */}
            <Route path="/filter/:theme" element={<FilterButtons />} />
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
