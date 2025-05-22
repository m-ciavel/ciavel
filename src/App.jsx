import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
     <div className="relative">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

const App = () => {
  return (
    <main className="bg-[#202221] text-white">
        <Router>
            <Navbar className="fixed top-0 left-0 w-full z-50" />
            <AnimatedRoutes />
        </Router>
    </main>
  )
}

export default App