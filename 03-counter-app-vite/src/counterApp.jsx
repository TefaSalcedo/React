import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  // Definir el Hook use estate con counter=0 y setCounter para cambiar el 0
  
  const [counter, setCounter] = useState(value);

  // Definición de la función setCounter
  const botonSuma = () => {
    // Forma 1
      setCounter(counter + 1);
    // Forma 2
      // setCounter((counteractual)=>counteractual +1);
  };

  const botonResta = () => setCounter(counter - 1);
  const botonReset = () => setCounter((counteractual) => value - 12);

  return (
    <>
      <h1>CounterApp</h1>
      {/* Dejar ver el estado "Counter" */}
      <h2> {counter} </h2>
      {/* Aplicar la función al boton */}
      <button onClick={botonSuma}>+1</button>
      <button onClick={botonResta}>-1</button>
      <button onClick={botonReset}>Reset</button>
    </>
  );
};


// Props
CounterApp.propTypes = {
  title: PropTypes.string,
  value: PropTypes.number,
};
// Defaul Props
CounterApp.defaultProps = {
  name: `Estefania Salcedo`,
};
