
import React from 'react';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import useStyles from './Product.style';

import { Link, Grid, Typography, Card, CardHeader, CardContent, Button } from '@material-ui/core';

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

    const classes = useStyles({});

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
        <Grid item={true}>
            <Card className={classes.card}>
                <CardHeader
                    title={product.Name}
                    subheader={product.Description}
                    className={classes.header}
                />
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Precio total del seguro
                    </Typography>
                    <Typography variant="h3" component="h2" className={classes.price}>
                        ${product.TotalPremiumValue} {currency}
                    </Typography>
                    <Grid container className={classes.priceHighLight} justify="center" spacing={1} alignItems="center">
                        <Typography component="p" variant="body2" className={classes.highlightIndication}>
                            pago mensual:
                        </Typography>
                        <Typography variant="h4" component="p" className={classes.splitPrice}>
                            ${montly} {currency}
                        </Typography>
                    </Grid>

                    <Typography variant="h5" className={classes.listTitle}>
                        Coberturas incluidas
                    </Typography>
                    <ul className={classes.includedList}>
                        {
                            product.PlanCoverages &&
                            product.PlanCoverages.Coverages.map( (coverage, index) =>
                                (<li key={`_coverage${index}`}>
                                    <PhoneAndroidIcon className={classes.icon} />
                                        {coverage.Name}
                                </li>))
                        }
                    </ul>

                    <Grid container direction="column" justify="center" alignItems="center">
                        <Link className={classes.detaiLink}>Ver coberturas completas</Link>

                        <Button variant="contained" color="primary">
                            Comprar
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default Product;