import { Link } from 'react-router-dom';
import profile from '../data/profile.json'; // adjust the path if needed

export default function Footer() {
  return (
    <>
      {/* Main Footer Section */}
      <div className="container mx-auto backdrop-blur-3xl my-5">
        <footer className="text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              {/* YouTube */}
              <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
                <h4 className="text-3xl my-5 font-semibold mb-4">My YouTube</h4>
                <a
                  href={profile.youtube}
                  className="text-red-600 hover:text-red-200 transition-colors"
                  aria-label="YouTube Channel"
                >
                  <i className="fa-brands fa-youtube fa-beat fa-2xl"></i>
                </a>
              </div>

              {/* Around the Web */}
              <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
                <h4 className="text-3xl my-5 font-semibold mb-4 uppercase">Around the Web</h4>
                <div className="flex justify-center space-x-4">
                  <a href={profile.gmail} className="text-white hover:text-lime-300 transition-colors" aria-label="Email">
                    <i className="fa-brands fa-google fa-2x"></i>
                  </a>
                  <a href={profile.insta} className="text-white hover:text-rose-400 transition duration-300 transform md:hover:scale-150" aria-label="Instagram">
                    <i className="fa-brands fa-instagram fa-2x"></i>
                  </a>
                  <a href={profile.linkedin} className="text-white hover:text-indigo-400 transition duration-300 transform md:hover:scale-150" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin fa-2x"></i>
                  </a>
                  <a href={profile.fb} className="text-white hover:text-blue-700 transition duration-300 transform md:hover:scale-150" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f fa-2x"></i>
                  </a>
                  <a href={profile.github} className="text-white hover:text-gray-950 transition duration-300 transform md:hover:scale-150" aria-label="GitHub">
                    <i className="fa-brands fa-github fa-2x"></i>
                  </a>
                </div>
                <button className="btn bg-white text-black border border-gray-300 hover:bg-black hover:text-white my-5 px-4 py-2 rounded">
                  It does Nothing 😂
                </button>
              </div>

              {/* Spotify Embed */}
              <div className="w-full md:w-1/3 text-center">
                <h4 className="text-3xl my-5 font-semibold mb-4">Dependent on...!?</h4>
                <iframe
                  style={{ borderRadius: '12px' }}
                  src={profile.spotify}
                  width="100%"
                  height="152"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Embed"
                ></iframe>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Bottom Strip Footer */}
      <footer className="footer footer-center p-4 backdrop-blur-xl text-base-content border-t border-base-300">
        <aside>
          <p className="text-sm">
            © 2025 <span className="font-semibold">{profile.name}</span>. All rights reserved.
          </p>
        </aside>
      </footer>
    </>
  );
}
