import Header from "./components/Header/Header";
import Suggests from "./components/Body/Suggests";
import Footer from "./components/Footer/Footer";
import DesktopLimitations from "./components/Body/Limitations/DesktopLimitations";
function App() {
  return (
    <>
      <div className="w-full h-full overflow-x-hidden absolute z-0">
        <Header />
        <Suggests />
        <DesktopLimitations />
        <Footer />
      </div>
    </>
  );
}

export default App;
