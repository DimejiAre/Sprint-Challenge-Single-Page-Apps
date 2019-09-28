import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid black;
  padding: 0 10px;
  border-radius: 15px;
  width: 20vw;
  margin: 20px;
  background-color: white;
`;

export default function LocationCard({ location }) {
  return (
    <StyledDiv>
      <h2>{location.name}</h2>
      <p>Type: {location.type}</p>
      <p>Dimension: {location.dimension}</p>
      {/* <div>
        {residents.map(resident => (
          <p>{resident}</p>
        ))}
      </div> */}
    </StyledDiv>
  )
}
