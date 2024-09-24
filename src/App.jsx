import Benefits from "./components/Benefits/Benefits"
import Banner from "./components/common/Banner/Banner"
import CustomCardV1 from "./components/common/Cards/CustomCardV1"
import Navbar from "./components/common/Navbar/Navbar"
import Warning from "./components/common/Warning/Warning"
import ConnectStore from "./components/ConnectStore/ConnectStore"
import Demo from "./components/Demo/Demo"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Landing from "./components/Landing/Landing"
import MakeMoney from "./components/MakeMoney/MakeMoney"
import FeedBack from "./components/UserFeedBack/FeedBack"


function App() {

  return (
    <>
    <Navbar/>
    <Landing/>

    <Benefits/>
    <Demo/>
    <Warning/>
    <ConnectStore/>
    <Features/>
    <Banner/>
    <FeedBack/>
    <MakeMoney/>
    <Warning/>
    <Warning/>



    <Footer/>
    </>
  )
}

export default App
