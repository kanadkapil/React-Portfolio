import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="navbar backdrop-blur-xl text-primary-content px-4 z-40 relative container mx-auto rounded-2xl shadow-2xl- ">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost hover:scale-105 hover:text-black hover:rounded-2xl hover:bg-lime-600 text-3xl p-6">
          Kanad's Portfolio
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-2">
        <Link to="/" className="btn btn-lg  hover:scale-110 hover:text-black btn-ghost hover:bg-lime-600 hover:rounded-2xl">Home</Link>
        <Link to="/about" className="btn btn-lg  hover:scale-110 hover:text-black btn-ghost hover:bg-lime-600 hover:rounded-2xl">About</Link>
        <Link to="/projects" className="btn btn-lg  hover:scale-110 hover:text-black btn-ghost hover:bg-lime-600 hover:rounded-2xl">Projects</Link>
        <Link to="/skills" className="btn btn-lg  hover:scale-110 hover:text-black btn-ghost hover:bg-lime-600 hover:rounded-2xl">Skills</Link>
        <Link to="/education" className="btn btn-lg  hover:scale-110 hover:text-black btn-ghost hover:bg-lime-600 hover:rounded-2xl">Education</Link>
        <Link to="/certificates" className="btn btn-lg  hover:scale-110 hover:text-black btn-ghost hover:bg-lime-600 hover:rounded-2xl">Certificates</Link>
        <Link to="/contact" className="btn btn-lg  hover:scale-110 hover:text-black btn-ghost hover:bg-lime-600 hover:rounded-2xl">Contact</Link>
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/certificates">Certificates</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}
