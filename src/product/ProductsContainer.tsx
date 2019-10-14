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
  
  return (
    <Grid container spacing={3} justify="center">
        {
            imeiDevice.Plans &&
            imeiDevice.Plans.map( (product, i) => <Product product={product} key={`_p${i}`} /> )
        }
    </Grid>
  );
}