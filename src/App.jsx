import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between  text-base-content">
      <Header />
      <main className="flex-1 p-4 mt-5">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
