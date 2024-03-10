import AboutSection from "./components/AboutSection"
import ContactMe from "./components/ContactMe"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import ProjectSection from "./components/ProjectSection"
 

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]   ">
     <Navbar/>
      <div className="container mx-auto mt-24  py-4 px-12">
  <HeroSection/>
  <AboutSection/>
<ProjectSection/>
{/* <ContactSection/> */}
<ContactMe/>
      </div>
<Footer/>
    </main>
  )
}

export default page
