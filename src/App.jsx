import Benefits from "./components/Benefits/Benefits"
import Banner from "./components/common/Banner/Banner"
import CustomCardV1 from "./components/common/Cards/CustomCardV1"
import Navbar from "./components/common/Navbar/Navbar"
import Warning from "./components/common/Warning/Warning"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"


function App() {

  return (
    <>
    <Navbar/>
    <Benefits/>
    
    <Warning/>
    <Features/>
    <Banner/>
    <Footer/>
    </>
  )
}

export default App
