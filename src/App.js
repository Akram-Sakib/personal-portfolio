import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { ThemeProvider } from "./Context/ThemeContext/ThemeContext";
import Background from "./Pages/Shared/Theme/Background/Background";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Blog from "./Pages/Blog/Blog";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Portfolios from "./Pages/Portfolios/Portfolios";
import Footer from "./Pages/Shared/Footer/Footer";
import Particle from "./Particle/Particle";
import AnimatedCursor from "react-animated-cursor";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <>
      <ThemeProvider>
        <HelmetProvider>
          <AnimatedCursor innerSize={12} outerSize={10} color="67, 56, 202" />
          <Particle />
          <Navbar />
          <Background>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="/portfolio" element={<Portfolios />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Background>
          <Footer />
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
