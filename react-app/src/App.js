import './App.css';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import Login from 'pages/Login';
import Dashboard from 'pages/dashboard';
import AddClass from 'components/CreateClass';
import "../src/fontawesome.js";
import AddCourse from 'pages/AddCourse';
import Show from 'pages/library';
import ShowClass from 'pages/class';
import Folder from 'pages/folder';
import course_learn from 'pages/learn_course';
import Course from 'pages/learn_course';
import EditCourse from 'pages/EditCourse';
import EditInfo from 'pages/editInfo';

function LogOut() {
  localStorage.removeItem("token");
  window.location.href = "/";
}


function App() {
  const token  = localStorage.getItem('token');
  if(!token)  return <Login/>

  return(
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/add-course" element={<AddCourse />}/>
        <Route path="/library" element = {<Show/>}/>
        <Route path="/class/:id" element={<ShowClass/>}/>
        <Route path="/folder" element={<Folder/>}/>
        <Route path='/learn-course' element={<Course/>}/>
        <Route path='/edit-course' element={<EditCourse/>}/>
        <Route path='/edit-info' element={<EditInfo/>}/>  
      </Routes>
    </>
  )
}

export default App;