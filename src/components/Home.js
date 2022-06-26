import React from "react";

const Home = ({ isStarted, setIsStarted, setExpectedNumber }) => {
  const HandleStart = () => {    
    setIsStarted(!isStarted);
    setExpectedNumber(Math.floor(Math.random() * 100));
  };

  return (
    <div>
      <p>Cliquez sur ce bouton pour commencer</p>
      <button onClick={() => HandleStart()}>Commencer</button>
    </div>
  );
};

export default Home;
