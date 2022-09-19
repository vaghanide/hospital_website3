import logo from './logo.svg';
import './App.css';
 import Home from './Conteinars/Home/Home';
 import About from './Conteinars/Home/About/About';
 import Appointment from './Conteinars/Appointment/Appointment';
import Contact from './Conteinars/Home/Contact/Contact';
import Departments from './Conteinars/Departments/Departments'
import Doctors from './Conteinars/Doctors/Doctors';
import { Route, Router, Switch } from 'react-router-dom';
import Headar from './Component/Hedar/Hedar';
 import Footer from './Component/Footer/Footer';
import List from './componet/List';
import Layout from './admin/Componet/Layout';
import MedcinesAdmin from './admin/Contanier/MedcinesAdmin';


function App() {
  return (
    <div>
    <header />
    {/* <switch>
      {/* { <Router exact path={"/"} componet={Home}/>
      <Router exact path={"/appointment"} componet={appointment}/>
      <Router exact path={"/about"} componet={about}/>
      <Router exact path={"/contact"} componet={contact}/> }
      <Madicines />
      <List /> */}
{/* <switch/>
    <footer />     */}
    <Layout>
      <switch>
        <Route exact path={"/MedcinesAdmin"} componet={MedcinesAdmin}/>
      </switch>
    </Layout>
    </div>
    
  )
}

export default App;