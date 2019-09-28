import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 10px;

  label {
      margin: 0 10px 0 0;
      width: 120px;
      display: inline-block;
  }

  button {
      margin: 0 15px;
  }

  div {
      color: whitesmoke;
      font-family: Arial, Helvetica, sans-serif;
  }

  
`;

function SearchForm (props) {
    const {search, changeSearch, validationSchema} = props;

    return (
        <Formik 
            validationSchema={validationSchema}
            initialValues={{name: ''}}
            onSubmit={search}
            render={props => {
                return (
                <Form>
                    <StyledDiv>
                    <label><strong>Filter by Name:</strong></label>
                    <input onChange={changeSearch} type='text' placeholder='Enter Name' />
                    <br />
                    <label><strong>Search by Name:</strong></label>
                    <Field name='name' type='text' placeholder='Enter Character'/>
                    <button type="submit">Enter</button>
                    <ErrorMessage name='name' component='div' />
                    </StyledDiv>
                </Form>
                )
            }}
        />
    );
}

export default SearchForm;