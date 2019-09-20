import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/Form";
import styled from "styled-components";
import axios from "axios";
import * as yup from 'yup';

const StyledMain = styled.main`
  background-color: cornflowerblue;
  font-family: 'Shadows Into Light', cursive;
`;

export default function App() {

  const [characters, setCharacters] = useState([]);
  const [serverError, setServerError] = useState('');

  const search = (formValue, actions) => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then( response => {
      const newCharacters = response.data.results;
      const matchedCharacters = newCharacters.filter( chr => {
        if(chr.name.toLowerCase().includes(formValue.name)){
          return chr
        }
      })
      if(matchedCharacters.length){
        setCharacters(matchedCharacters);
        setServerError("");
      }
      else{
        setServerError("Did not find any Character matching this name");
      }
      actions.resetForm();
    })
    .catch(err => {
      setServerError(err.message);
    })
    
  }

  const validationSchema = yup.object().shape({
    name: yup.string()
    .ensure('You must enter a string')
    .required('You must enter a Name')
    .min(2).max(50)
  });

  return (
    <StyledMain>
      <Header />
      {serverError}
      <Route exact path='/' render={props => <WelcomePage {...props} />} />
      <Route path='/characters' 
        render={props => <SearchForm 
        {...props} 
        search={search} 
        validationSchema={validationSchema} />}
      />
      <Route path='/characters' 
        render={props => <CharacterList 
        {...props} 
        characters={characters} 
        setCharacters={setCharacters}
        setServerError={setServerError} />}
      />
    </StyledMain>
  );
}
