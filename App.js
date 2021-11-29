import './App.css';
import LogInButton from './Components/LogInButton';
import './Components/LogInButton.css';
import SignInButton from './Components/SignInButton';
import './Components/SignInButton.css';
import Search from './Components/Search';
import './Components/Search.css';
import Home from './Components/Home';
import './Components/Home.css';
import Upload from './Components/Upload';
import './Components/Upload.css';

import {
  BrowserRouter as Router,  
  Routes,
  Route,  
} from "react-router-dom";

function App() {
  return (
    <>
    
    <Router>
      <Routes>
          <Route exact path="/logInForm" element={<LogInButton/>}/>
          <Route exact path="/signInForm" element={<SignInButton/>}/>
          <Route exact path="/search" element={<Search/>}/>
          <Route exact path="/upload" element={<Upload/>}/>
          <Route exact path="/" element={<Home/>}/>          
       </Routes>
    </Router>
    </>
  );
}

export default App;
