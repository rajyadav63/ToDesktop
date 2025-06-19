
import './App.css'
import AppSlider from './components/AppSlider'
import Hero from './components/Hero'
import Nabvar from './components/Nabvar'

function App() {

  return (
    <>
      <Nabvar />
      <Hero />
      <AppSlider />
      <h1 className='text-4xl font-semibold  m-[40px]'>How it works</h1>
      <div className='h-[1000px]'></div>
    </>
  )
}

export default App
