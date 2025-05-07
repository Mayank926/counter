import React from 'react';
import './App.css'

function App() {
  const [count,setCount] = React.useState(0);
  function increament(){
    setCount(prevCount => prevCount+1);
  }
  function decreament(){
    setCount(prevCount => prevCount-1);
  }

  return (
    <div
      className="test"
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>is State important to know </h1>
      <div style={{ display: "flex", gap: "0px", justifyContent: "center" , alignItems: "flex-end"}}>
      <button id='minusBtn' style={{ borderRadius: "50%", width: "50px", height: "50px", fontSize: "30px", 
            fontWeight: "bold",backgroundColor: "grey", position: "relative", zIndex: 2, marginLeft: "-20px"}}
            onClick={decreament}>
          -
        </button>
        <button id='displayBtn'
          style={{ borderRadius: "50%", width: "100px", height: "100px", fontSize: "35px", fontWeight: "bold" }}	
        >
          {count}
        </button>
        <button id='plusBtn' style={{ borderRadius: "50%", width: "50px", height: "50px", fontSize: "30px", 
            fontWeight: "bold",backgroundColor: "grey" , position: "relative", zIndex: 2 ,marginRight: "-20px"}}
            onClick={increament}>
          +
        </button>
      </div>
    </div>
  );
}

export default App
