import './App.css';
import Header from './components/Header/Header';
import {Routes,Route} from 'react-router-dom'
import Shop from '../src/components/Shop/Shop'
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <Shop></Shop> */}
      <Routes>
          <Route path='/' element={<Shop></Shop>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/orders' element={<Orders></Orders>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/about' element={<About></About>}></Route>
      </Routes>
     </div> 
  );
}

export default App;
