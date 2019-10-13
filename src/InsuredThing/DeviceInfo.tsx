import React from 'react';

import { useStateValue } from '../stores/Store';
import { makeStyles } from '@material-ui/styles';
import { Theme, Grid, Paper } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button, Typography, Slider } from '@material-ui/core';
import { StateLink } from '../_stateRouter/routerRender'

const useStyles = makeStyles((theme:Theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 1
    },
    field: {
        width: '100%'
    },
    storageslider: {
        width: '100%',
        marginTop: 40
    },
    callToActionButton: {
        width: '100%'
    }
}));

const marks = [
    {
        value: 16,
        label: '16GB',
    }, 
    {
        value: 32,
        label: '32GB',
    }, 
    {
        value: 64,
        label: '64GB',
    }
];
  
function valuetext(value) {
    return (value / 1000) + ' GB';
}

export const DeviceInfoForm = () => {

    const classes = useStyles({});
    const [{deviceInfo}, dispatch] = useStateValue();

    return React.useMemo(
        () => (
        <Formik
            initialValues={{ ...deviceInfo }}
            validate={values => {
                return {};
            }}
            onSubmit={(values, { setSubmitting }) => {
                dispatch({ 'type': 'saveDeviceInfo', 'deviceInfo': values });
            }}
            >
            {({
                values,
                errors,
                touched,
                handleSubmit
            }) => (
                <form onSubmit={handleSubmit}>
                    {errors.FirstName && touched.FirstName && errors.FirstName}
                    
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Field className={classes.field}
                                name="imei"
                                label="IMEI"
                                type="text"
                                component={TextField}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Field className={classes.field}
                                name="platform"
                                label="Platform"
                                type="text"
                                component={TextField}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={4}>
                            <Field className={classes.field}
                                name="model"
                                label="Model"
                                type="text"
                                component={TextField}
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography id="discrete-slider" gutterBottom>
                                Storage
                            </Typography>
                            <Slider className={classes.storageslider}
                                defaultValue={values.totalstorage / 1000}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                step={null}
                                marks={marks}
                                min={16}
                                max={64}
                            />
                        </Grid>
                    </Grid>

                    <Grid container justify="center" spacing={3}>
                        <Grid item xs={12} sm={6} lg={4}>
                            <StateLink href="/">
                                <Button className={classes.callToActionButton} variant="contained" color="primary">
                                    Protect My SmarthPhone
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