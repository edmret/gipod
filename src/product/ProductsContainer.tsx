import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product';

//const useStyles = makeStyles();

export default function ProductsContainer() {
  //const classes = useStyles(props);

  //todo mad an iteration for this
  return (
    <Grid container={true} spacing={2}>
        <Product />

        <Product />

        <Product />
    </Grid>
  );
}