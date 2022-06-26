import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Play from "./components/Play";
import Congrats from "./components/Congrats";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [expectedNumber, setExpectedNumber] = useState(0);
  const [compteur, setCompteur] = useState(0);

  return (
    <div>
      {isStarted ? (
        isWin ? (
          <Congrats
            isWin={isWin}
            setIsWin={setIsWin}
            expectedNumber={expectedNumber}
            compteur={compteur}
            setCompteur={setCompteur}
            setExpectedNumber={setExpectedNumber}
          />
        ) : (
          <Play
            ExpectedNumber={expectedNumber}
            isWin={isWin}
            setIsWin={setIsWin}
            compteur={compteur}
            setCompteur={setCompteur}
          />
        )
      ) : (
        <Home
          isStarted={isStarted}
          setIsStarted={setIsStarted}
          setExpectedNumber={setExpectedNumber}
        />
      )}
    </div>
  );
}

export default App;
