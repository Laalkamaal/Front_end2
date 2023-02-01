import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import Play from './pages/Play';
import Quiz from './pages/Quiz';
import Authenticate from './pages/Authenticate';
import HomeCard from './components/HomeCard';
import "./Styling/Create.css"


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<Create/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/play" element={<Play/>}/>
          <Route exact path="/quiz" element={<Quiz/>}/>
         
          <Route exact path="/authenticate" element={<Authenticate/>}/>
          
        </Routes> 
      </BrowserRouter>
      
    
    
  )
}

export default App;
