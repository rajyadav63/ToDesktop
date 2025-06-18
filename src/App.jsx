
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
      <div className='h-[1000px]'></div>
    </>
  )
}

export default App
