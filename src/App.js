import React from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/hem';
import Portfolio from './pages/portfolio';
import Kontakt from './pages/kontakt';
import Information from './pages/information';
import './App.css';

function AppContent() {
    const location = useLocation();

    // Dynamiskt bestämma klass beroende på sida
    const getBodyClass = () => {
        if (location.pathname === "/") {
            return "home-background"; // Bakgrund för Home
        } else {
            return "default-background"; // Bakgrund för andra sidor
        }
    };

    return (
        <div className={getBodyClass()}>
            <div className="app-container">
                <Sidebar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/kontakt" element={<Kontakt />} />
                        <Route path="/information" element={<Information />} />
                        <Route path="/hem" element={<Home />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
