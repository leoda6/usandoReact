import PropTypes from 'prop-types';
import { useState } from 'react';
export const Test = ({ mensaje }) => {
  //valor-forma de modificarlo-valor inicial 
    const [numero, setNumero]= useState(0)
    return (
        <div>
            <p>{numero + 1}</p>
            <button onClick={() => setNumero(numero+1)}>sumar boton</button><button/>
            <p>{mensaje}</p>
        </div>
    );  
}

Test.propTypes = {
    mensaje: PropTypes.string.isRequired
};