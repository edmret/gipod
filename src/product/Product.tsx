import { makeStyles, DefaultTheme } from '@material-ui/styles';
import React from 'react';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';


import { Theme } from '@material-ui/core';


import { Link, Grid, Typography, Card, CardHeader, CardContent, Button } from '@material-ui/core';


const useStyles = makeStyles(({ palette, spacing }: Theme) => ({
    content:{
        background: 'rgb(240, 251, 254)',
        textAlign: "center"
    },
    header: {
        background: palette.primary.main,
        color: palette.primary.contrastText,
        '& span': {
            color: palette.primary.contrastText
        }
    },

    priceHighLight: {
        background: palette.primary.dark,
        position: "relative",
        margin: spacing(1, 0),
        padding: spacing(1, 0),
        "&:after, &:before":{
            content: "''",
            position: "absolute",
            left: spacing(-2),
            top: 0,
            bottom: 0,
            background: palette.primary.dark,
            width: spacing(2)
        },
        "&:after": {
            left: 'auto',
            right: spacing(-2)
        }
    },

    highlightIndication: {
        maxWidth: "5.3rem",
        textAlign: "left"
    },

    price: {
        color: palette.primary.main
    },

    card: {
        maxWidth: 270,
    },

    includedList: {
        listStyle: "none",
        marginLeft: 0,
        padding: 0,
        textAlign: "left"
    },

    detaiLink: {
        display: "block",
        margin: "0.5rem 0"
    },

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',

    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
    },

    icon: {
        verticalAlign: "center"
    }

}));

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
                        <Typography variant="h4" component="p">
                            $216.58
                        </Typography>
                    </Grid>

                    <Typography variant="h5">
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