import React from 'react';

import {useStateValue} from '../stores/Store';
import {makeStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';

const useStyles = makeStyles((theme:Theme) => (
    {
      container: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      field: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200
      }
    }
  ));

export const UserForm = () => {

    const classes = useStyles({});
    const [{userInfo}, dispatch] = useStateValue();

    return React.useMemo(
        () => (
        <Formik
            initialValues={{ ...userInfo }}
            validate={values => {
                return {};
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    {errors.FirstName && touched.FirstName && errors.FirstName}
                    <Field
                        name="FirstName"
                        label="First Name"
                        type="text"
                        component={TextField}
                    />

                    <Field
                        name="LastName"
                        label="Last Name"
                        type="text"
                        component={TextField}
                    />

                    <Field
                        name="Email"
                        label="Email"
                        type="email"
                        component={TextField}
                    />

                    <Field
                        name="Phone"
                        label="Phone"
                        type="text"
                        component={TextField}
                    />

                    <Field
                        name="BirthDate"
                        label="BirthDate"
                        type="date"
                        component={TextField}
                    />



                    
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
            </Formik>
        ),
        []
    );
}