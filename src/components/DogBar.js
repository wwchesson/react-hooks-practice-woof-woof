import React from "react";

function DogBar({ pups, onSpanClick }) {
  const renderSpans = pups.map((pup) => (
    <span  key={pup.id} onClick={() => onSpanClick(pup.id)}>
      {pup.name} 
    </span>
  ));

  return <div id="dog-bar">{renderSpans}</div>;
}

export default DogBar;
