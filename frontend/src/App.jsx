
import './App.css'
import BookList from './components/BookList/BookList';
import Login from './components/Login/Login'
import ProtectedRoute from './components/ProtectedRoute';

import Signup from './components/Signup/Signup'
import { BrowserRouter as Router, Routes, Route } from "react-router";

function App() {
  

  return (
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='/book' element={<ProtectedRoute><BookList/></ProtectedRoute>}/>
    </Routes>
  </Router>
     
    </>
  )
}

export default App
