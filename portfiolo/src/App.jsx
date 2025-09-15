import Header from "./components/Header"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"
function App() {



  return (<div className="bg-bbb">
         <Header/>
         <About/>
         <Project/>
         <Contact/>
         <Footer/>
         <Toaster/>

  </div>)
       
}

export default App
