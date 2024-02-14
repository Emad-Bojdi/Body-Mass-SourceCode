import Header from "./components/Header/Header"
import Suggests from "./components/Body/Suggests"
import Limitations from "./components/Body/Limitations/Limitaions"
import Footer from "./components/Footer/Footer"
function App() {

  return (
    <>
    <div className="overflow-x-hidden">
    <Header/>
    <Suggests/>
    <Limitations/>
    <Footer/>
    </div>
    </>
  )
}

export default App
