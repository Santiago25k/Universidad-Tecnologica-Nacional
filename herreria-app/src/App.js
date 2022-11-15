import { Routes, Route} from "react-router-dom";

/* ruta principal */
import Principal from './pages/Principal';
/* ruta de inicio */
import Inicio from './pages/Inicio'
/* pagina no encontrada */
import Error404 from './pages/Error404'



function App() {
  return (
  <div className='App'>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
</div>
  
  )
}

export default App


