import React from 'react';
import {Grid} from '@material-ui/core';
import { Theme } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import {useStateValue} from '../stores/Store';

const useStyles = makeStyles((theme:Theme) => (
    {
        productInfo: {
            background: theme.palette.background.paper,
            color: theme.palette.primary.main,
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1)
        },
        phoneIcon: {
            color: theme.palette.primary.main
        }
    }
));

export const PhoneInfo = ()=> {

    const classes = useStyles({});

    const [ {imeiDevice}, dispatch ] = useStateValue();

    return (
        <Grid container alignItems="center" className={classes.productInfo} alignContent="center">
            <PhoneAndroidIcon className={classes.phoneIcon} />
            Asegura tu {imeiDevice.Model && imeiDevice.Model.Name}, 32GB
        </Grid>
    );
};