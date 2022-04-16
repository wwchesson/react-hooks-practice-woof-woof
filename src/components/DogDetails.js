import React from "react"

function DogDetails({pup, onToggleGoodBad}) {
    if(!pup) return <h2>Select a dog</h2>

    const {id, name, image, isGoodDog} = pup
    
    function updateDog() {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({isGoodDog: !isGoodDog})
        })
        .then(r => r.json())
        .then(onToggleGoodBad)
    }

    return (
        <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
            <img src={image} alt="pup"/>
            <h2>{name}</h2>
            <button onClick={updateDog}>{isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
        </div>
    )
}

export default DogDetails
