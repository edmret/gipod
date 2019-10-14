import React from 'react';

import {useStateValue} from '../stores/Store';
import {makeStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import {Button} from '@material-ui/core';
import {StateLink} from '../_stateRouter/routerRender'

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
      },
      buttonNext:{
          marginLeft: theme.spacing(4)
      },
      button:{
          width:100
      }
    }
  ));

export const PaymentForm = () => {

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
                        margin="normal"
                    />

                    <StateLink href="address-form">
                        <Button variant="contained" color="primary"  className={classes.button}>
                            Previous
                        </Button>
                    </StateLink>
                    <StateLink href="success-payment">
                        <Button variant="contained" color="primary" className={`${classes.buttonNext} ${classes.button}`}>
                            ISSUE
                        </Button>
                    </StateLink>

                </form>
            )}
            </Formik>
        ),
        []
    );
}