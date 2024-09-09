import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import UserLoginPage from './pages/UserLogin/UserLoginPage.jsx';
import RegisterPage from './pages/UserRegister/UserRegisterPage.jsx';
import SupportPage from './pages/Support/Support.jsx';
import TermsPage from './pages/Policies/TOS/TOS.jsx';
import PrivacyPage from './pages/Policies/Privacy/Privacy.jsx';
import StickyBar from './pages/Products/Marketplace/Catagories/Stickybar.jsx';
import Marketplace from './pages/Products/Marketplace/Marketplace.jsx';
import ContactPage from './pages/Policies/ContactUs/ContactUs.jsx';
import ContactUsForm from './pages/Policies/ContactUs/ContactUsForm.jsx';
import AboutPage from './pages/Company/AboutUs/AboutUs.jsx';
import NewsroomPage from './pages/Company/Newsroom/Newsroom.jsx'
import ListingPage from './pages/Products/Marketplace/Listing.jsx';
import './i18n';

function App() {
  const location = useLocation();
  const isMarketplacePage = location.pathname === '/marketplace';

  return (
    <div className="w-full">
      <NavBar />
      <div className="container mx-auto flex">
        {isMarketplacePage && <StickyBar />}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/login" element={<UserLoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact/form" element={<ContactUsForm />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/listing/1" element={<ListingPage />} />
          </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
