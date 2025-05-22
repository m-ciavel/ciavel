import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home, About, Projects, Contact } from './pages';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <main className="bg-[#202221] text-white">
        <Router>
            <Navbar className="fixed top-0 left-0 w-full z-50"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    </main>
  )
}

export default App