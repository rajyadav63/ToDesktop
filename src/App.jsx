
import './App.css'
import AppSlider from './components/AppSlider'
import Hero from './components/Hero'
import Nabvar from './components/Nabvar'
import Sliders from './components/Sliders'
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
      <div className='h-[1000px]'></div>
    </>
  )
}

export default App
