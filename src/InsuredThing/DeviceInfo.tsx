import React from 'react';

import {useStateValue} from '../stores/Store';
import {makeStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import {Button, Typography, Slider} from '@material-ui/core';
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
      }
    }
  ));


  const marks = [
    {
      value: 0,
      label: '16GB',
    },
    {
      value: 50,
      label: '32GB',
    },
    {
      value: 100,
      label: '64GB',
    }
  ];

  function valuetext(value) {
    return `${value}°C`;
  }

  function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
  }

export const DeviceInfoForm = () => {

    const classes = useStyles({});
    const [{userInfo, deviceInfo}, dispatch] = useStateValue();

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
                        label="IMEI"
                        type="text"
                        component={TextField}
                        margin="normal"
                    />

                    <Typography id="discrete-slider-restrict" gutterBottom>
                        Restricted values
                    </Typography>
                    <Slider
                        defaultValue={20}
                        valueLabelFormat={valueLabelFormat}
                        getAriaValueText={valuetext}
                        aria-labelledby="discrete-slider-restrict"
                        step={null}
                        valueLabelDisplay="auto"
                        marks={marks}
                    />

                    <StateLink href="/">
                        <Button variant="contained" color="primary">
                            Continue
                        </Button>
                    </StateLink>

                </form>
            )}
            </Formik>
        ),
        []
    );
}