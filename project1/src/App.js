import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Aboutme from './components/pages/Aboutme';
import Hobbies from './components/pages/Hobbies';
import Qualification from './components/pages/Qualification';
import Skills from './components/pages/Skills';
function App() {
  return (
    <div className="App">

                 <Navbar/>
                 <Routes>
                    <Route path= "/Aboutme" element={<Aboutme/>}/>
                    <Route path= "/Hobbies" element={<Hobbies/>}/>
                    <Route path= "/Qualification" element={<Qualification/>}/>
                    <Route path= "/Skills" element={<Skills/>}/>
                 </Routes>
    </div>
  );
}

export default App;
