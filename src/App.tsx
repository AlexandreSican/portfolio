import { About } from './components/About'
import { Contact } from './components/Contact'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'




function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
