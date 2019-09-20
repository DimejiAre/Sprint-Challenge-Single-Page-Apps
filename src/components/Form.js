import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

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
                    <label>Search by Name</label>
                    <Field name='name' type='text' placeholder='Enter Name' />
                    <ErrorMessage name='name' component='div' />
                    <button type="submit">Enter</button>
                </Form>
                )
            }}
        />
    );
}

export default SearchForm;