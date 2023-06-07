import logo from './logo.svg';
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
    <>
    <Nav/>
    <Body/>
    <Map/>
    <EditProfile/>
    {/* <Blog/> */}
    <Blog1/>
    <BookingDetails/>
    {/* <SideBar/> */}
    <HomePage/>
    {/* <BestNaturePlace/> */}
    </>
   
  );
}

export default App;
