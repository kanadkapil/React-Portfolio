import { NavLink } from 'react-router-dom';

export default function Header() {
  const linkClass = ({ isActive }) =>
    `btn btn-lg btn-ghost hover:scale-110 hover:text-black hover:bg-lime-600 hover:rounded-2xl ${
      isActive ? 'bg-lime-600 text-black font-bold rounded-2xl' : ''
    }`;

  return (
    <div className="navbar backdrop-blur-xl text-primary-content px-4 mt-5 z-40 relative container mx-auto rounded-2xl shadow-2xl">
      <div className="flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn btn-ghost hover:scale-105 hover:text-black hover:rounded-2xl hover:bg-lime-600 text-3xl p-6 ${
              isActive ? 'bg-lime-600 text-black font-bold rounded-2xl' : ''
            }`
          }
        >
          Kanad's Portfolio
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/skills" className={linkClass}>Skills</NavLink>
        <NavLink to="/education" className={linkClass}>Education</NavLink>
        <NavLink to="/certificates" className={linkClass}>Certificates</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="dropdown dropdown-end md:hidden z-50 relative">
        <button tabIndex={0} className="btn btn-ghost btn-circle z-50 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-3 z-50 p-2 shadow backdrop-blur-3xl rounded-box w-52 text-primary-content bg-base-100 bg-opacity-80"
        >
          <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>Projects</NavLink></li>
          <li><NavLink to="/skills" className={linkClass}>Skills</NavLink></li>
          <li><NavLink to="/education" className={linkClass}>Education</NavLink></li>
          <li><NavLink to="/certificates" className={linkClass}>Certificates</NavLink></li>
          <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
}
