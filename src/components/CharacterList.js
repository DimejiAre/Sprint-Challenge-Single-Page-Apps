import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const {characters, setCharacters} = props;

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  return (
    <StyledSection className="character-list">
      {characters.map(chr => (
        <CharacterCard key={chr.id} character={chr}/>
      ))}
    </StyledSection>
  );
}
