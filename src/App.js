import './App.css';
import './Card.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Addblog from './components/Addblog';
function App() {
  return (
    <>
    <Router>
      <div className='structure'>
      <Navbar/>
        <div className="components">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/addblog' element={<Addblog/>} />
      </Routes>
      </div>
      </div>
      </Router>
    </>
  );
}

export default App;
