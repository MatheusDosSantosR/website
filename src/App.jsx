import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Navbar />
      <div className="div max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <ProjectsSection />
        <Footer/>
      </div>
    </>
  )
}

export default App
