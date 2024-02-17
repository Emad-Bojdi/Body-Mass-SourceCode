import Header from "./components/Header/Header"
import Suggests from "./components/Body/Suggests"
import Limitations from "./components/Body/Limitations/Limitaions"
import Footer from "./components/Footer/Footer"
function App() {

  return (
    <>
    <div className="w-full h-full overflow-x-hidden absolute z-0">
    <Header/>
    <Suggests/>
    <Limitations/>
    <Footer/>
    </div>
    </>
  )
}

export default App
