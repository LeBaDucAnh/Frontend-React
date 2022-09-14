import './App.css';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import Login from 'pages/Login';
import Dashboard from 'pages/dashboard';
import AddClass from 'components/AddClass';
import "../src/fontawesome.js";


function App() {
  // const token  = localStorage.getItem('token');
  // if(!token)  return <Login/>

  return(
    <>
       <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/add-class" element={<AddClass />}/>
      </Routes>
    </>
  )
}

export default App;