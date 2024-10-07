import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';  // relative imports
import Properties from './pages/Properties';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} /> {/* Homepage route */}
          <Route path="/about-us" element={<AboutUs />} /> {/* About Us route */}
          <Route path="/contact-us" element={<ContactUs />} /> {/* Contact Us route */}
          <Route path="/properties" element={<Properties />} /> {/* Properties route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
