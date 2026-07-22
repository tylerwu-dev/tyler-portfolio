import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"
import About from "../components/About"
import ResumeCTA from "../components/ResumeCTA"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
