import React, {useEffect} from 'react';
import {Grid, Slider} from '@material-ui/core';
import Product from './Product';
import { Theme } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {useStateValue} from '../stores/Store';
import {ProductService} from './services/product.service';

import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

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

export default function ProductsContainer() {
  const classes = useStyles({});

  const [ {imeiDevice}, dispatch ] = useStateValue();

  //TODO: improve this shit
  const _productService = new ProductService();

  useEffect(
    ()=> {
      _productService.getPhoneData().then(
        (response) => {
          dispatch({type: 'setIMEIDevice', imeiDevice: response});
        }
      );
    }, []
  );

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


  
  //todo mad an iteration for this
  return (
    <>
      <Grid container={true} spacing={2}>
          {
            imeiDevice.Plans &&
            imeiDevice.Plans.map( (product, i) => <Product product={product} key={`_p${i}`} /> )
          }
          
      </Grid>
      
    </>
  );
}