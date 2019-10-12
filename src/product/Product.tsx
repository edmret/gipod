import { makeStyles, DefaultTheme } from '@material-ui/styles';
import React from 'react';

import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { Theme } from '@material-ui/core';


import { Link, Grid, Typography, Card, CardHeader, CardContent, Button } from '@material-ui/core';
import productUseStyles from './Product.style';
import { typography } from '@material-ui/system';

const useStyles = makeStyles(({ palette }: Theme) => ({
    content:{
        background: 'rgb(240, 251, 254)'
    },
    header: {
        background: palette.primary.main,
        color: palette.primary.light,
        '& span': {
            color: palette.primary.light
        }
    },
    card: {
        maxWidth: 345,
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
                    <Typography variant="body2" color="textSecondary" component="h1">
                        $2,599.00
                    </Typography>
                    <Grid container>
                        <Typography component="p" variant="body2">
                            pago mensual:
                        </Typography>
                        <Typography variant="h2" component="p">
                            $216.58
                        </Typography>
                    </Grid>

                    <Typography variant="h3">
                        Coberturas incluidas
                    </Typography>
                    <ul>
                        <li>
                            Cobertura 1
                        </li>
                        <li>
                            Cobertura 2
                        </li>
                        <li>
                            Cobertura 3
                        </li>
                        <li>
                            Cobertura 4
                        </li>
                    </ul>

                    <Link>Ver coberturas completas</Link>

                    <Button variant="contained" color="secondary">
                        Comprar
                    </Button>
                </CardContent>

        
            </Card>
        </Grid>
    );
}