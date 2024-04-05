//VISTA PRINCIPAL
import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'
import Menu from './components/menu/menu'
import Quicklinks from './components/quicklinks/quicklinks'
import Carousel from './components/carousel/carousel'
import Indicators from './components/indicators/indicators'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='bg-color'>
      <Header />
      <div className='main-cont-view'>
        <div className='cont-left'>
          <Menu />
          <Quicklinks />
        </div>
        <div className='cont-right'>
          <Carousel />
          <Indicators />
        </div>
      </div>
      <p>The information contained in this website is AT Engine México S.A.P.I. de C.V. proprietary information and is disclosed in confidence.</p>
      </div>
    </>
  )
}

export default App
