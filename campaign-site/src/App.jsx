import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import TopIssues from './pages/TopIssues';
import Endorsements from './pages/Endorsements';
import Updates from './pages/Updates';
import UpdateDetail from './pages/UpdateDetail';
import Photos from './pages/Photos';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [siteData, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/site.json')
      .then((response) => response.json())
      .then((data) => {
        setSiteData(data);
        setLoading(false);

        // Apply theme colors as CSS variables
        document.documentElement.style.setProperty('--primary-color', data.theme.primaryColor);
        document.documentElement.style.setProperty('--secondary-color', data.theme.secondaryColor);
        document.documentElement.style.setProperty('--background-color', data.theme.backgroundColor);
        document.documentElement.style.setProperty('--text-color', data.theme.textColor);
        document.documentElement.style.setProperty('--accent-color', data.theme.accentColor);
      })
      .catch((error) => {
        console.error('Error loading site data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!siteData) {
    return <div className="error">Failed to load site configuration</div>;
  }

  return (
    <Router>
      <div className="app">
        <NavBar
          candidateName={siteData.candidateName}
          donateUrl={siteData.donateUrl}
        />

        <Routes>
          <Route path="/" element={<Home siteData={siteData} />} />
          <Route path="/about" element={<About siteData={siteData} />} />
          <Route path="/issues" element={<TopIssues siteData={siteData} />} />
          {/* <Route path="/endorsements" element={<Endorsements siteData={siteData} />} /> */}
          <Route path="/updates" element={<Updates siteData={siteData} />} />
          <Route path="/updates/:slug" element={<UpdateDetail siteData={siteData} />} />
          <Route path="/photos" element={<Photos siteData={siteData} />} />
          <Route path="/contact" element={<Contact siteData={siteData} />} />
        </Routes>

        <Footer
          contact={siteData.contact}
          socials={siteData.socials}
          legalFooter={siteData.legalFooter}
        />
      </div>
    </Router>
  );
}

export default App;
