
import './App.css'
import AppSlider from './components/AppSlider'
import CustomerStories from './components/CustomerStories'
import DownloadBuilder from './components/DownloadBuilder'
import Faq from './components/Faq'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Nabvar from './components/Nabvar'
import PricingCard from './components/PricingCard'
import Sliders from './components/Sliders'
import SubFooter from './components/SubFooter'
import SupportCard from './components/SupportCard'
import ToDesktopHandle from './components/ToDesktopHandle'
import Step1 from './components/works-step/Step1'
import Step2 from './components/works-step/Step2'
import Step3 from './components/works-step/Step3'

function App() {

  return (
    <>
      <Nabvar />
      <Hero />
      <AppSlider />
      <h1 className='text-4xl lg:text-5xl font-semibold m-[20px] lg:ml-[100px] mt-[40px]'>How it works</h1>
      <Step1 />
      <Step2 />
      <Step3 />
      <h1 className='max-w-[300px] md:max-w-[500px] text-5xl font-medium lg:font-semibold m-[20px] lg:ml-[100px] mt-[40px]'>ToDesktop handles
        the details</h1>
      <ToDesktopHandle />
      <Sliders />
      <h1 className='text-5xl font-medium lg:font-semibold m-[20px] lg:ml-[100px] mt-[40px]'>Customer Stories</h1>
      <CustomerStories />
      <DownloadBuilder />
      <h1 className='max-w-[550px] lg:max-w-[600px]  text-5xl font-medium m-8 mt-24 lg:ml-36 leading-normal'>Choose a plan that fits your needs</h1>
      <PricingCard className='h-[70vh]' />
      <SupportCard />
      <h1 className='text-3xl lg:text-5xl text-center font-semibold lg:font-bold m-[20px] lg:ml-[100px] mt-[40px]'>Frequently Asked Questions</h1>
      <Faq />
      <Footer />
      <SubFooter />
    </>
  )
}

export default App
