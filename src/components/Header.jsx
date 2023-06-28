import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"


const Header = ({
  gastos,
  setGastos,
  presupuesto, 
  setPresupuesto, 
  isValidPresupuesto, 
  setIsValidPrespuesto
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto
          gastos = {gastos}
          setGastos={setGastos}
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPrespuesto={setIsValidPrespuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPrespuesto={setIsValidPrespuesto}
        />
      )}
    </header>
  )
}

export default Header