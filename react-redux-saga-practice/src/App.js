import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';

import {
  
  Routes,
  Route,

} from "react-router-dom";


function App() {

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/cart' element={<Cart></Cart>} />
    </Routes>
    
  </div>
  );
}

export default App;
