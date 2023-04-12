import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './pages/Login';
function App() {
  return (
    
      <Router>
      <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
   
  );
}

export default App;
