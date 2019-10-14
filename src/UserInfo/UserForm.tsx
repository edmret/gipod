import React from 'react';

import {useStateValue} from '../stores/Store';
import {makeStyles, createGenerateClassName} from '@material-ui/styles';
import {Theme, Grid} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import {Button} from '@material-ui/core';
import {StateLink} from '../_stateRouter/routerRender';

const useStyles = makeStyles((theme:Theme) => (
    {
      container: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      field: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
      },
      buttonNext:{
          marginLeft: theme.spacing(4),
          minWidth: "10rem"
      },
      secondaryButton:{
        color: "#FFF"
      },
      wrapperButton: {
          paddingTop: theme.spacing(2)
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
                <form onSubmit={handleSubmit} className={classes.container}>
                    {errors.FirstName && touched.FirstName && errors.FirstName}

                    <Grid container={true} spacing={2}>
                        <Grid item>
                            <Field
                                name="FirstName"
                                label="First Name"
                                type="text"
                                component={TextField}
                                margin="normal"
                            />
                        </Grid>

                        <Grid item>
                            <Field
                                name="LastName"
                                label="Last Name"
                                type="text"
                                component={TextField}
                                margin="normal"
                            />
                        </Grid>

                        <Grid item>
                            <Field
                                name="Email"
                                label="Email"
                                type="email"
                                component={TextField}
                                margin="normal"
                            />
                        </Grid>
                        
                    </Grid>

                    <Grid container={true} spacing={2}>
                        <Grid item>
                            <Field
                                name="Phone"
                                label="Phone"
                                type="text"
                                component={TextField}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item>
                            <Field
                                name="BirthDate"
                                label="BirthDate"
                                type="date"
                                component={TextField}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    </Grid>

                        
                    <Grid container spacing={2} className={classes.wrapperButton}>

                        <Grid item>
                            <StateLink href="/">
                                <Button variant="contained" color="secondary" className={classes.secondaryButton}>
                                    Previous
                                </Button>
                            </StateLink>
                            <StateLink href="address-form">
                                <Button variant="contained" color="primary" className={`${classes.buttonNext}`}>
                                    Next
                                </Button>
                            </StateLink>
                        </Grid>

                    </Grid>

                    
                    
                </form>
            )}
            </Formik>
        ),
        []
    );
}