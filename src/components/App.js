import React, { useState, useEffect } from "react";
import DogBar from "./DogBar";
import DogDetails from "./DogDetails";
import Filter from "./Filter";

function App() {
  const [pups, setPups] = useState([]);
  const [containerDog, setContainerDog] = useState(null)
  const [goodDogsOnly, setGoodDogsOnly] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3001/pups")
      .then((r) => r.json())
      .then((data) => setPups(data));
  }, []);

  const selectedDog = pups.find(pup => pup.id === containerDog)

  function handleUpdateDog(updatedDog) {
    const updatedDogs = pups.map(pup => pup.id === updatedDog.id ? updatedDog : pup)
    setPups(updatedDogs)
  }

  function handleFilterToggle () {
    setGoodDogsOnly(goodDogsOnly => !goodDogsOnly)
  }

  let displayDogs = pups
  if(!goodDogsOnly) {
    displayDogs = displayDogs.filter(pup => pup.isGoodDog === true)
  }

  return (
    <div className="App">
      <Filter onFilter={handleFilterToggle} goodDogs={goodDogsOnly}/>
      <DogBar pups={displayDogs} onSpanClick={setContainerDog}/>
      <DogDetails pup={selectedDog} onToggleGoodBad={handleUpdateDog}/>
    </div>
  );
}

export default App;
