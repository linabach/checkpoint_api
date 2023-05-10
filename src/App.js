import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import Error from './Pages/Error';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Users from './Pages/Users';
import AdmineInterface from './Pages/AdminInterface';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route  path='/*' element={<Error/>}></Route>
        <Route path='/AboutUs' element={<AboutUs/>}></Route>
        <Route  path='/ContactUs' element={<ContactUs/>}></Route>
        <Route  path='/Users' element={<Users/>}></Route>
        <Route  path='/Admin Interface' element={<AdmineInterface/>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
