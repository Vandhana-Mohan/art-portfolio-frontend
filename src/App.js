// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import AboutUs from "./Common/AboutUs";
import ContactUs from "./Common/ContactUs";
import Developer from "./Common/Developer";
import FilterButtons from "./Common/FilterButtons";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import NavBar from "./Common/NavBar";
import Newsletter from "./Common/NewsLetter";
import SignIn from "./components/auth/SignIn";

// Pages
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import EditImage from "./pages/ImagesPages/EditImage";
import Index from "./pages/ImagesPages/Index";
import Show from "./pages/ImagesPages/Show";
import NewImage from "./pages/ImagesPages/NewImage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SignIn />
        <NavBar />
        <FilterButtons />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/developers" element={<Developer />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/art/images/:id/edit" element={<EditImage />} />
            <Route path="/art/newCollection" element={<NewImage />} />
            <Route path="/art/newImage" element={<NewImage />} />
            <Route path="/art/:id" element={<Show />} />
            {/* <Route path="/art/search/:id" element={<ShowSearch />} /> */}
            {/* <Route path="/categories" element={<CategoriesIndex />} /> */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
