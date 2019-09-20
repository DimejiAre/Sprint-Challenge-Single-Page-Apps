import React from "react";

export default function CharacterCard(props) {
  const {character} = props;
  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name}/>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </div>
  );
}
