import React, { useState } from "react";

const Play = ({ compteur, setCompteur, ExpectedNumber, isWin, setIsWin }) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const HandleSubmit = () => {
    console.log(typeof input);
    if (ExpectedNumber > input) {
      setResult("Plus grand que " + input);
      setCompteur(compteur + 1);
    } else if (ExpectedNumber < input) {
      setResult("Plus petit que " + input);
      setCompteur(compteur + 1);
    } else {
      setIsWin(true);
    }
  };

  return (
    <div>
      <p>{result}</p>
      <p>Quel chiffre proposez-vous?</p>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={HandleSubmit}>
        Valider
      </button>
      <p>Tentatives : {compteur}</p>
    </div>
  );
};

export default Play;
