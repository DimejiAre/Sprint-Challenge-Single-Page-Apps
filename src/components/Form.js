import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 10px;

  label {
      margin: 0 15px 0 0;
  }

  button {
      margin: 0 15px;
  }

  
`;

function SearchForm (props) {
    const {search, validationSchema} = props;

    return (
        <Formik 
            validationSchema={validationSchema}
            initialValues={{name: ''}}
            onSubmit={search}
            render={props => {
                return (
                <Form>
                    <StyledDiv>
                    <label><strong>Search by Name:</strong></label>
                    <Field name='name' type='text' placeholder='Enter Name' />
                    <ErrorMessage name='name' component='div' />
                    <button type="submit">Enter</button>
                    </StyledDiv>
                </Form>
                )
            }}
        />
    );
}

export default SearchForm;