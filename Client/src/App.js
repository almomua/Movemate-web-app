import './App.css';
import Signup from './components/Sign-up';
import Login from './components/Login';
import {BrowserRouter ,Routes , Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Signup/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
