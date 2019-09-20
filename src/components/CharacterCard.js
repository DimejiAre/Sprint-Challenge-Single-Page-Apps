import React from "react";
import styled from "styled-components";

const StyledDiv = styled.main`
  border: 1px solid black;
  padding: 0 10px;
  border-radius: 15px;
  width: 20vw;

  img {
    width: 100%;
    border-radius: 15px;
  }
`;

export default function CharacterCard(props) {
  const {character} = props;
  return (
    <StyledDiv>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name}/>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Species: {character.species}</p>
      <p>Status: {character.status}</p>
    </StyledDiv>
  );
}
