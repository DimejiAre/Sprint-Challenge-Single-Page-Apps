import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

const StyledDiv = styled.div`

display: flex;
flex-direction: column;

section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

div {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

a {
  text-decoration: underline;
  color: white;
  &:hover {
    cursor: pointer;
    color: red;
  }
}
`;

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const {characters, setCharacters, setServerError} = props;

  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');

  const getCharacters = url => {
    Axios.get(url)
    .then(response => {
      setCharacters(response.data.results)
      setNextUrl(response.data.info.next)
      setPrevUrl(response.data.info.prev)
    })
    .catch(err => {
      setServerError(err.message)
    })
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results)
      setNextUrl(response.data.info.next)
      setPrevUrl(response.data.info.prev)
    })
    .catch(err => {
      setServerError(err.message)
    })
  }, []);

  return (
    <StyledDiv>
      <div><a onClick={() => getCharacters(prevUrl)}>Previous</a><a onClick={() => getCharacters(nextUrl)}>Next</a></div>
      <section className="character-list">
      {characters.map(chr => (
        <CharacterCard key={chr.id} character={chr}/>
      ))}
    </section>
    <div><a onClick={() => getCharacters(prevUrl)}>Previous</a><a onClick={() => getCharacters(nextUrl)}>Next</a></div>
    </StyledDiv>
  );
}
