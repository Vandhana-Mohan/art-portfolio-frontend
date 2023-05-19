// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Developer from "./components/Developer";
import ContactUs from "./components/ContactUs";
import FilterButtons from "./components/FilterButtons";

// Pages
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import EditCollection from "./pages/Edit";
import Index from "./pages/Index";
import NewCollection from "./pages/New";
import Show from "./pages/Show";

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
            <Route path="/index" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/developers" element={<Developer />} />
            <Route path="/art/:id/edit" element={<EditCollection />} />
            <Route path="/art/new" element={<NewCollection />} />
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
