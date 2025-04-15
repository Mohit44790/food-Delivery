import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import DiningPage from './pages/DiningPage';
import DeliveryPage from './pages/DeliveryPage';
import NightlifePage from './pages/NightlifePage';
import Footer from './components/Footer';
import CollectionsPage from './pages/CollectionsPage';
import ProductDetail from './pages/ProductDetail';
import CollectionDetail from './pages/CollectionDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function AppContent() {
  const location = useLocation();

  // Hide Navbar and Footer on the home page
  const hideHeaderFooter = location.pathname === "/home" ||location.pathname === "/login" ||location.pathname === "/signup";

  return (
    <>
      {!hideHeaderFooter && <Navbar/>}
      <Routes>
        {/* Redirect root to /dining */}
        <Route path="/" element={<Navigate to="/dining" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/nightlife" element={<NightlifePage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collection/:id" element={<CollectionDetail />} />
        <Route path="/product/:name/:id" element={<ProductDetail />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
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
