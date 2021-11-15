import './App.css';
import LogIn from './Components/LogIn';
import './Components/LogIn.css';
import LogInButton from './Components/LogInButton';
import './Components/LogInButton.css';
import SignInButton from './Components/SignInButton';
import './Components/SignInButton.css';
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
          <Route exact path="/" element={<LogIn/>}/>
          
       </Routes>
    </Router>
    </>
  );
}

export default App;
