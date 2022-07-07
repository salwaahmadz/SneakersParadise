import './App.css';
import "./style/beranda.css"
import "./style/katalog.css"
import NavigationBar from "./components/NavigationBar";
import Beranda from "./components/Beranda";

function App() {
  return (

    <div className="myBG">
      <NavigationBar />
      <Beranda />
    </div>
  
    )
}

export default App;
