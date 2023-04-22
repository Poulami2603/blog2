import Home from "./Pages/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Department from "./Pages/Department";
import Doctors from "./Pages/Doctors";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/service' element={<Service/>}/>
          <Route exact path='/department' element={<Department/>}/>
          <Route exact path='/doctors' element={<Doctors/>}/>
          <Route exact path='/blog' element={<Blog/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
