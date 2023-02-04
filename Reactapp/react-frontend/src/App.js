import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import UserComponent from './components/component/UserComponent';
import Base from './components/Base';
import About from './components/pages/About';
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Registration from './components/pages/Registration';
import Help from './components/pages/Help';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
    <Routes>
      <Route path="home" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/help" element={<Help/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
