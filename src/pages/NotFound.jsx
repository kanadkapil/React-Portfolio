// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';
import FuzzyText from '../components/FuzzyText';

export default function NotFound() {
    return (
        <div className="container mx-auto">

            <div className="min-h-screen flex flex-col items-center justify-center text-center backdrop-blur-xl text-primary p-6">
                <p className="text-xl mb-6">Oops! 🥺🥺 The page you're looking for doesn't exist.</p>
                <FuzzyText
                    fontSize="clamp(3rem, 12vw, 8rem)"
                    fontWeight={900}
                    color="#ff4d4f"
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    enableHover={true}
                    className="w-full max-w-screen-md my-20"
                    style={{ maxWidth: "90vw", display: "block" }}
                >
                    404 Not Found
                </FuzzyText>
                <Link to="/" className="btn bg-red-500 hover:bg-lime-400 hover:text-black ">Go Home 🐼🐸</Link>
            </div>

        </div>
    );
}
