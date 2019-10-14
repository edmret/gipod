import React from 'react';

import {useStateValue} from '../stores/Store';
import {makeStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import {Button,Grid} from '@material-ui/core';
import {StateLink} from '../_stateRouter/routerRender'
import color from '@material-ui/core/colors/orange';

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
      prueba:{

      },
      noMarginBottom:{
          marginBottom: theme.spacing(0)
      },
      fontsize20:{
          fontSize: 20
      },
      textsecondary:{

      },
      fontsize26:{
          fontSize: 26
      },
      graydark:{
          color: color[800]
      },
      Title1:{
          fontWeight:700
      },
      Title2:{
          color:theme.palette.secondary.light
      },
      Title3:{
          color:theme.palette.secondary.dark
      },
      Title4:{
          color:theme.palette.secondary.contrastText
      },
      Title5:{
          color:theme.palette.primary.main
      }
    }
  ));

export const SuccessPaymentForm = () => {
    const classes = useStyles({ });
    return (
        <>
        <Grid container>
			<Grid item lg={6} md={12} sm={12} xl={6}>
				<Grid container>
					<Grid item lg={12} md={12} sm={12} xl={12}>
						<h1 className={classes.Title4}>
							¡Your cell phone is already insured!
						</h1>
						<p className={`${classes.fontsize20} ${classes.Title5}`}>
							Your policy number is: <br/> <strong className={classes.fontsize26} >A2 39000001</strong>
						</p>
					</Grid>
				</Grid>
                <hr />
			</Grid>
		</Grid>

        <Grid container>
            <Grid item lg={6} md={12} sm={12} xl={6}>

                <br />
                <Grid container spacing={5}>
                    <Grid item lg={6} md={6} sm={6} xl={6}>
                        <Grid className={`${classes.fontsize20} ${classes.Title3}`}>
                            <strong>AMOUNT</strong>
                        </Grid>
                        <p id="C_Fecha2" className={`${classes.fontsize20} ${classes.Title5}`}>
                            <strong>$140 USD</strong>
                        </p>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xl={6}>
                        <Grid className={`${classes.fontsize20} ${classes.Title3}`}>
                            <strong>DATE</strong>
                        </Grid>
                        <p id="C_Fecha" className={`${classes.fontsize20} ${classes.Title5}`}>
                            <strong>{(new Date()).toLocaleDateString() }</strong>
                        </p>
                    </Grid>
                </Grid>
                <br />




            </Grid>

        </Grid>
        </>
    )
}