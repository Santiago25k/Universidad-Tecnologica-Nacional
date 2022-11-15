import { Link } from "react-router-dom";


/* Logo y video en movimiento de principal*/
import fondo3 from '../assets/principal/fondo3.mp4'
import logo from '../assets/principal/logo.png'


const Principal = () => {
  return (
    <div className='principal'>
        
        <video src={fondo3} autoPlay loop muted />
  
    <div className='overlay'>    
    </div>

    <div>
          <header className="principal-header">
        <img src={logo} className="principal-logo" alt="logo" />
        
        <p className="subtittle">
          Herreria de obra, trabajos en hierro y acero inoxidable.
        </p>
        
        <Link to="/Inicio">Mas informacion</Link>        
      </header>  
        </div>

  </div>
  )
}

export default Principal