import fondo3 from '../assets/inicio/fondo3.jpg'

const inicio = () => {
  return (
    <>
      <div className='overlay'>    
      </div>
      <header>
        <img src={fondo3} className="fondo-inicio" alt="fondo" />
      </header> 
    </>
  )
}

export default inicio