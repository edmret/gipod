import React from 'react';
import {Grid, Slider} from '@material-ui/core';
import Product from './Product';

//const useStyles = makeStyles();

export default function ProductsContainer() {
  //const classes = useStyles(props);

  //TODO: switch this logic to calculate positions based on criteria
  const marks = [
    {
      value: 0,
      label: '32GB',
    },
    {
      value: 50,
      label: '64GB',
    },
    {
      value: 100,
      label: '128GB',
    },
  ];
  
  function valuetext(value:any) {
    return `${value}°C`;
  }
  
  function valueLabelFormat(value: any) {
    return marks.findIndex(mark => mark.value === value) + 1;
  }

  //todo mad an iteration for this
  return (
    <>
      <Slider
      defaultValue={20}
      valueLabelFormat={valueLabelFormat}
      getAriaValueText={valuetext}
      aria-labelledby="discrete-slider-restrict"
      step={null}
      valueLabelDisplay="auto"
      marks={marks}
      />
      <Grid container={true} spacing={2}>
          <Product />

          <Product />

          <Product />
      </Grid>
      
    </>
  );
}