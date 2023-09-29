import './App.css';
import LoginPage from './Components/Auth/Login';
import SignUp from './Components/Auth/SignUp';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Login' element={<LoginPage />}  />
          <Route path='/' element={<SignUp />}  />
          <Route path='/Home' element={<Home />}  />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
