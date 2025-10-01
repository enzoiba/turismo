import './App.css'
import Header from "./components/Header";
import Intro from "./components/Intro";
import Fundamento from "./components/Fundamento";
import Objetivos from "./components/Objetivos";
import Actividades from "./components/Actividades";
import Cronograma from "./components/Cronograma";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import { FaFacebook } from "react-icons/fa";


function App() {


  return (
    <>
  
      <main>
       <Header className="bg-no-repeat bg-cover bg-fixed  bg-[url(https://www.esquel.tur.ar/sp/wp-content/uploads/2025/09/DSC0054-9-3-scaled.jpg)]  min-h-screen"/>
        <Intro />
        <Fundamento />
        <Objetivos />
        <Actividades />
        <Cronograma />
        <Contacto />
      </main>
      <Footer /> 
    
    <FaFacebook className='bg-white text-blue-700 w-40 h-40'/>
    
    </>
  )
}

export default App
