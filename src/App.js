import React, { useState } from 'react';
import BoxGeneratorDisplay from './components/BoxGeneratorDisplay';
import BoxGeneratorForm from './components/BoxGeneratorForm';


function App() {
  // State
  const [currentBox, setCurrentBox] = useState(
    [
      { color: "red" },
      { color: "blue" },
      { color: "purple" }
    ])


  // Create Box
  const createBox = (eNewBox) => {
    // Temp Var: will get destroyed after function is run!
    const copyOfBox = [...currentBox]
    copyOfBox.push(eNewBox)
    setCurrentBox(copyOfBox)
  }


  // Display
  return (
    <div className="App">
      <hr />
      <BoxGeneratorForm createBox={createBox} />
      {
        currentBox.map((box, idx) => {
          return <BoxGeneratorDisplay box={box} key={idx}
          />
        })
      }
    </div>
  );
}


export default App;