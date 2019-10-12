
import React from 'react';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import useStyles from './Product.style';

import { Link, Grid, Typography, Card, CardHeader, CardContent, Button } from '@material-ui/core';

export default function Product() {

    const classes = useStyles({});

    return (
        <Grid item={true}>
            <Card className={classes.card}>
                <CardHeader
                    title="Òptimo"
                    subheader="92% de nuestros cleintes eligieron esta madre"
                    className={classes.header}
                />
                <CardContent className={classes.content}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Precio total del seguro
                    </Typography>
                    <Typography variant="h3" component="h2" className={classes.price}>
                        $2,599.00
                    </Typography>
                    <Grid container className={classes.priceHighLight} justify="center" spacing={1} alignItems="center">
                        <Typography component="p" variant="body2" className={classes.highlightIndication}>
                            pago mensual:
                        </Typography>
                        <Typography variant="h4" component="p" className={classes.splitPrice}>
                            $216.58
                        </Typography>
                    </Grid>

                    <Typography variant="h5" className={classes.listTitle}>
                        Coberturas incluidas
                    </Typography>
                    <ul className={classes.includedList}>
                        <li>
                            <PhoneAndroidIcon className={classes.icon} />
                            Cobertura 1
                        </li>
                        <li>
                            <PhoneAndroidIcon className={classes.icon} />
                            Cobertura 2
                        </li>
                        <li>
                            <PhoneAndroidIcon className={classes.icon} />
                            Cobertura 3
                        </li>
                        <li>
                            <PhoneAndroidIcon className={classes.icon} />
                            Cobertura 4
                        </li>
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