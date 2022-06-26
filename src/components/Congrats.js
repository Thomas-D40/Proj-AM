import React from "react";

const Congrats = ({
  setIsWin,
  setIsStarted,
  compteur,
  expectedNumber,
  setCompteur,
}) => {
  const HandleRestart = () => {
    setIsStarted(false);
    setIsWin(false);
    setCompteur(0);
  };
  return (
    <div>
      <p>Félicitations</p>
      <p>
        Vous avez trouvé {expectedNumber} en {compteur} tentatives
      </p>
    </div>
  );
};

export default Congrats;
