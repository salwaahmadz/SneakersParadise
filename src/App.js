import './App.css';
import "./style/beranda.css"
import "./style/katalog.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationPutih from "./components/NavigationPutih";
import BerandaPutih from "./components/BerandaPutih";
import Katalog from './components/KatalogPutih';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <NavigationPutih />
        <div className="content">
          <Routes>
            <Route path="/" element={<BerandaPutih/>} />
            <Route path="/katalog" element={<Katalog/>}/>
          </Routes>
        </div>
      <Footer />
    </Router>
    
    // <Router>
    //   <div className="myBG2">
    //     <NavigationPutih />
    //   </div>

    //   <div>
    //     <Switch>
    //       <Route path='/'>
    //         <BerandaPutih />
    //       </Route>
    //       <Route path='/katalog'>
    //         <Katalog />
    //       </Route>
    //     </Switch>
    //   </div>
  
    // </Router>
    
    )
}

export default App;
