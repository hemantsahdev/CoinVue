import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/coins" element={<Coins/>} />
        <Route exact path="/exchanges" element={ <Exchanges/>} />
        <Route exact path="/coins/:id" element={<CoinDetails/>} />
      </Routes>
      {/* <Footer/> */}
    </Router>
  );
}

export default App
