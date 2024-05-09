import './App.css';
import Signup from './components/Sign-up';
import Login from './components/Login';
import {BrowserRouter ,Routes , Route, RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './components/Home';
import Food from './components/Food/Food';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Fraction from './components/Food/Fraction';
import Diet from './components/Diet/Diet';
import Layout from './components/Layout/Layout';
import Guest from './components/Guest/Guest';
import Body from './components/Body/Body';
import Profile from './components/Profile/Profile';


function App() {

  let routes = createBrowserRouter ([
    {
    path: '/',element: <Layout/>, children : [
    {index: true , element:<Login/>},
    {path: '/guest', element:<Guest/>},
    {path: '/body', element:<Body/>},
    {path: '/profile', element:<Profile/>},
    {path: '/diet', element:<Diet/>},
    {path: '/food', element:<Food/>},
    {path: '/login', element:<Login/>},
    {path: '/signup', element:<Signup/>},
    // {path: '/workout', element:<Workout/>},
  
      ]
  
    },
  
  ])


  return (
    <RouterProvider router={routes}/>


    // <div className="App">
    //   {/* <Signup/> */}
    //   <BrowserRouter>
    //     <ToastContainer />
    //     <Routes>
    //       <Route path='/login' element={<Login/>}></Route>
    //       <Route path='/signup' element={<Signup/>}></Route>
    //       <Route path='/home' element={<Home />} />
    //       <Route path='/food' element={<Food />} />
    //       <Route path='/fraction' element={<Fraction />} />
    //       <Route path='/diet' element={<Diet />} />
    //     </Routes>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
