import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is iNotebook" />
          <div className="container">
            <Routes>
              {/* Route for Home Page */}
              <Route exact path="/" element={<Home />} />
              
              {/* Route for About Page */}
              <Route exact path="/about" element={<About />} />
              
              {/* Route for Login Page */}
              <Route exact path="/login" element={<Login />} />
              
              {/* Route for Signup Page */}
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;