import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Price from "./pages/Price";
import TechnicalData from "./pages/TechnicalData";
import WhereBuy from "./pages/WhereBuy";

function App() {
  return (
    <Box sx={{width:"100%", margin:"0px", padding:"0px", backgroundColor:"white"}}>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route 
          path="/gallery"
          element={<Gallery />}
        />
        <Route 
          path="/technical-data"
          element={<TechnicalData />}
        />
        <Route 
          path="/price"
          element={<Price />}
        />
        <Route 
          path="/where-buy"
          element={<WhereBuy />}
        />
        <Route 
          path="/about-us"
          element={<AboutUs />}
        />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
