import { Navbar } from "./components"
import {  About, Footer, Header, Skill, Testimonial, Work } from "./container"
import './app.scss'
function App() {

  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About /> 
      <Work />
      <Skill />
      <Testimonial />
      <Footer />

    </div>
  )
}

export default App
