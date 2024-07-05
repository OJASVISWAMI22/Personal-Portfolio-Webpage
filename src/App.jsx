import { useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/contact'
import Domain from './components/domain'
import Footer from './components/footer'
import Hero from './components/hero'
import Work from './components/mywork'
import Navbar from './components/navbar'
import Upbtn from './components/up'
import Dataprovider from './store/store'
function App() {

  const [menu, setmenu] = useState("Navbar");
  
  return (
    <Dataprovider>
      <Navbar menu={menu} setmenu={setmenu}></Navbar>
      <Upbtn menu={menu} setmenu={setmenu} ></Upbtn>
      <Hero setmenu={setmenu}></Hero>
      <hr className="tag"/>
      <About></About>
      <hr className="tag"/>
      <Domain></Domain>
      <hr className="tag"/>
      <Work></Work>
      <hr className="tag"/>
      <Contact></Contact>
      <hr className="tag"/>
      <Footer></Footer>
    </Dataprovider>
  )
}

export default App
