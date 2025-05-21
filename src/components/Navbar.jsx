import { NavLink } from "react-router-dom"

const Navbar = ({ className = '' }) => {
  return (
    <header className={`p-4 z-10 flex items-center justify-between ${className}`}>
        <NavLink to="/" className="items-center justify-center flex font-bold">
            <div className="p-1 rounded-full bg-gradient-to-r from-amber-300 to-yellow-700 shadow-lg shadow-white">
                <img 
                    src="/icon.png" 
                    alt="Home Logo" 
                    className="w-12 h-auto rounded-full"
                />
            </div>
        </NavLink>
        <nav className="flex text-xl gap-9 font-medium p-4">
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-amber-500' : 'text-white'}>
                About
            </NavLink>
            <NavLink to="/Projects" className={({isActive}) => isActive ? 'text-amber-500' : 'text-white'}>
                Projects
            </NavLink>
        </nav>

    </header>
  )
}

export default Navbar