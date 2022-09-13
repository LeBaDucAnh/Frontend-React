import './App.css';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import Login from 'pages/Login';
import Header from 'components/Header';

function App() {
  // const token  = localStorage.getItem('token');
  // if(!token)  return <Login/>

  return(

      <Header/>
      /* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes> */
  )
}

export default App;