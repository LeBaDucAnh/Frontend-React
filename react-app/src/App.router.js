import './App.css';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-0 py-1">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/">Home</Link>
          <Link className="nav-item nav-link" to="/about">About</Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </>
  )
}

export default App;