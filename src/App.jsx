import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ClickSpark from './components/ClickSpark'; // <-- Import here

export default function App() {
  return (
    <ClickSpark
      sparkColor="#facc15"      // example yellow
      sparkSize={12}
      sparkRadius={20}
      sparkCount={10}
      duration={500}
      easing="ease-out"
      extraScale={1.5}
      
    >
      <div className="min-h-screen flex flex-col justify-between text-base-content">
        <Header />
        <main className="flex-1 p-4 mt-5">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ClickSpark>
  );
}
