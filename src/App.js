import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import SearchForm from "./components/Form";
import styled from "styled-components";

const StyledMain = styled.main`
  background-color: cornflowerblue;
  font-family: 'Shadows Into Light', cursive;
`;

export default function App() {

  const [characters, setCharacters] = useState([]);

  const search = (formValue, actions) => {
    const matchedCharacters = characters.filter( chr => {
      if(chr.name.toLowerCase().includes(formValue.name)){
        return chr
      }
    })
    setCharacters(matchedCharacters);
    actions.resetForm();
  }

  const validationSchema = {a:'boy'};

  return (
    <StyledMain>
      <Header />
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
        setCharacters={setCharacters} />}
      />
    </StyledMain>
  );
}
