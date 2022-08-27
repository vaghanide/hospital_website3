import logo from './logo.svg';
import './App.css';
// import Home from './Conteinars/Home/Home';
// import About from './Conteinars/Home/About/About';
// import Appointment from './Conteinars/Appointment/Appointment';
// import Contact from './Conteinars/Home/Contact/Contact';
// import Departments from './Conteinars/Departments/Departments'
// import Doctors from './Conteinars/Doctors/Doctors';
// import { Route, Switch } from 'react-router-dom';
// import Headar from './Component/Hedar/Hedar';
// import Footer from './Component/Footer/Footer';
import { useEffect, useState } from 'react';
 const Loadinghome = loading(Home)
      useEffect(() => {
      setloading(true);
      setTimeout(() => {
        setloading(false)
      } , 2000);
    },[])

function App() {

  const[loading , setloading] =useState(false);
  return (
    <Homewithloading 
    loading ={loading}
    />
    
    

  )
}

export default App;