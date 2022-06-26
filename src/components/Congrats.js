import React from "react";

const Congrats = ({
  setIsWin,
  compteur,
  expectedNumber,
  setCompteur,
  setExpectedNumber,
}) => {
  const HandleRestart = () => {
    setIsWin(false);
    setExpectedNumber(Math.floor(Math.random() * 100));
    setCompteur(0);
  };
  return (
    <div>
      <p>Félicitations</p>
      <p>
        Vous avez trouvé {expectedNumber} en {compteur} tentatives
      </p>
      <button
        onClick={() => {
          HandleRestart();
        }}
      >
        Rejouer
      </button>
    </div>
  );
};

export default Congrats;
