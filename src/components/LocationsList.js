import React, { useEffect, useState } from "react";
import Location from "./LocationCard";
import Axios from "axios";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export default function LocationsList(props) {
    const {locations, setLocations, setServerError} = props;

    useEffect(()=>{
        Axios.get('https://rickandmortyapi.com/api/location/')
        .then(response => {
            setLocations(response.data.results);
        })
        .catch(err => {
            setServerError(err.message);
        })
    },[])

    return (
        <StyledSection>
            {locations
            ? locations.map((location)=>(
                <Location key={location.id} location={location}/>
            ))
            : null}
        </StyledSection>
    )
}
