import './App.css'
import Header from "./components/Header";
import Intro from "./components/Intro";
import Fundamento from "./components/Fundamento";
import Objetivos from "./components/Objetivos";
import Actividades from "./components/Actividades";
import Cronograma from "./components/Cronograma";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";


function App() {


  return (
    <>
  
      <main>
       <Header />
        <Intro />
        <Fundamento />
        <Objetivos />
        <Actividades />
        <Cronograma />
        <Contacto />
      </main>
      <Footer /> 
    
    
    </>
  )
}

export default App
