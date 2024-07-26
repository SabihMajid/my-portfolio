import HeroSection from './component/HeroSection';
import Footer from './component/footer'
import  Navbar  from './component/Navbar';
import Project from './component/Project'
import Skills from './component/Skills';
import Aboutme from './component/Aboutme';
const page = () => {
  return (
    <div className='min-h-screen  bg-black overflow-hidden relative'>
      <div className='dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] '>

      <div className='max-w-7xl mx-auto p-5 '>
        <Navbar/>
        <HeroSection/>
      </div>
      <div className='h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full'></div>
      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
        <Aboutme/>
        <Skills/>
        <Project/>
        <Footer/>
      </div>
    </div>
  )
}

export default page