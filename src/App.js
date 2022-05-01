import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import { ThemeProvider } from './Context/ThemeContext/ThemeContext';
import Background from "./Pages/Shared/Theme/Background/Background";
import { HelmetProvider } from "react-helmet-async";
import Navbar from './Pages/Shared/Navbar/Navbar';
import Blog from './Pages/Blog/Blog';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (
    <>
      <ThemeProvider>
        <HelmetProvider>
          <Navbar/>
            <Background>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path='/portfolio' element={<Portfolio />} />
                  <Route path='/blog' element={<Blog />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contact' element={<Contact />} />
                </Route>
              </Routes>
            </Background>
            <Footer/>
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
