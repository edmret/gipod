import React from 'react';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import {useStateValue} from '../stores/Store';
import useStyles from './Product.style';
import { Link, Grid, Typography, Card, CardHeader, CardContent, Button, Divider } from '@material-ui/core';
import {StateLink} from '../_stateRouter/routerRender'

export interface ICoverage {
    Name: string;
    Title: string;
    Description: string;
}

export interface ICoverageWarpper {
    Coverages: Array<ICoverage>
}

export interface IPlan {
    Description: string;
    Name: string;
    PlanCoverages: ICoverageWarpper;
    PlanId: number;
    Product: any;
    ProductId: number;
    TotalPremiumValue: number;
}

export interface IProduct{
    product: IPlan,
    key: string
}

const Product: React.FC<IProduct> =  ({product}) => {

    const classes = useStyles({ });

    const [ {currentRoute}, dispatch ] = useStateValue();

    const paymentMethods = [{
        "PaymentPlanId": 1,
        "Name": "Montly",
        "Factor": 1.2,
        "Months": 12
    }];

    const selectedMethod = paymentMethods[0];

    const currency = "USD";

    const montly = (product.TotalPremiumValue * selectedMethod.Factor) / selectedMethod.Months;

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <Card className={classes.card}>
                <CardHeader
                    title={product.Name}
                    subheader={""}
                    className={classes.header}
                />
                <CardContent>

                    <Typography variant="h3" component="h2" className={classes.price}>
                        ${montly} <span className={classes.perMonth}>/mo</span>
                    </Typography>
                    
                    <Grid container justify="center">
                        <Grid item xs={8} md={12}>
                            <StateLink href={"user-data"} >
                                <Button variant="contained" className={classes.planSelectionButton} color="primary">
                                    Comprar
                                </Button>
                            </StateLink>
                        </Grid>
                    </Grid>

                </CardContent>
                <Divider light />
                <ul className={classes.includedList}>
                    {
                        product.PlanCoverages &&
                        product.PlanCoverages.Coverages.map( (coverage, index) =>
                            (<li key={`_coverage${index}`}>
                                    <PhoneAndroidIcon className={classes.icon} />{coverage.Name}
                            </li>))
                    }
                </ul>
            </Card>
            
        </Grid>
    );
}

export default Product;