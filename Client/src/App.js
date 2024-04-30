import './App.css';
import Signup from './components/Sign-up';
import Login from './components/Login';
import {BrowserRouter ,Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Food from './components/Food/Food';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fraction from './components/Food/Fraction';


function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/home' element={<Home />} />
          <Route path='/food' element={<Food />} />
          <Route path='/fraction' element={<Fraction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
