import React from 'react';

const Boton = ({ children, onClick }) => {
  return (
    <button className="boton" onClick={() => onClick(children)}>
      {children}
    </button>
  );
};

export default Boton;