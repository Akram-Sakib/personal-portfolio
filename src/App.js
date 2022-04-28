import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import { ThemeProvider } from './Context/ThemeContext/ThemeContext';
import Background from './Pages/Shared/Theme/Background/Background';

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
