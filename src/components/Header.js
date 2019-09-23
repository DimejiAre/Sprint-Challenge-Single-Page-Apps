import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2rem;
  padding-bottom: 10px;
  border-bottom: 3px solid black;
  h1 {
    margin: 10px 0;
  }
  div {
    width: 20vw;
    display: flex;
    justify-content: space-between;
  }

  button {
    font-size: 1rem;
    border-radius: 10px;
    a {
      text-decoration: none;
      color: black;
    }
    &:hover {
      background-color: skyblue;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/characters">View Characters</Link></button>
        <button><Link to="/locations">View Locations</Link></button>
      </div>
    </StyledHeader>
  );
}
