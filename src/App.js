import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './components/Nav.js';
import Body from './components/Body.js';
import Map from './components/Map';
import EditProfile from './components/EditProfile';
import Blog from './components/Blog';
import Blog1 from './components/Blog1';
import BookingDetails from './components/BookingDetails';
import HomePage from './components/HomePage';
import SideBar from './components/SideBar';
import BestNaturePlace from './components/BestNaturePlace';
function App() {
  return (
    <BrowserRouter>
     <Nav/>
     <Routes>
   
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/body" element={<Body/>}></Route>
    <Route path="/map" element={<Map/>}></Route>
    <Route path="/editprofile" element={<EditProfile/>}></Route>
    <Route path="/blog" element={<Blog1/>}></Route>
    {/* <Blog/> */}
    <Route path="/bookingdetails" element={<BookingDetails/>}></Route>
    
    {/* <SideBar/> */}
    {/* <HomePage/> */}
    {/* <BestNaturePlace/> */}
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
