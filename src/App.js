// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Developer from "./components/Developer";
import ContactUs from "./components/ContactUs";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Header /> */}
        {/* <NavBar /> */}
        <main>
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            {/* <Route path="/contact" element={<ContactUs />} /> */}
            {/* <Route path="/developers" element={<Developer />} /> */}
            {/* <Route path="/groceries/:id/edit" element={<Edit />} />
            <Route path="/groceries/new" element={<New />} />
            <Route path="/groceries/:id" element={<Show />} /> */}
            {/* <Route path="/groceries/search/:id" element={<ShowSearch />} /> */}
            {/* <Route path="/categories" element={<CategoriesIndex />} /> */}
            {/* <Route path="/" element={<Index />} /> */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
