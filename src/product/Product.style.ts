import { makeStyles } from '@material-ui/styles';

import { Theme } from '@material-ui/core';

const useStyles = makeStyles(({ palette, spacing, additionalColors }: Theme) => ({
    content:{
        background: palette.background.paper,
        textAlign: "center"
    },
    header: {
        background: palette.primary.main,
        color: palette.primary.contrastText,
        '& span:last-child': {
            color: palette.primary.contrastText,
            fontSize: '0.7rem'
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
        textAlign: "left",
        color: palette.secondary.contrastText
    },

    price: {
        color: palette.primary.main
    },

    splitPrice: {
        color: palette.secondary.dark
    },

    card: {
        maxWidth: 270,
    },

    listTitle: {
        textAlign: 'left',
        fontSize: "1.2rem",
        marginTop: spacing(3)
    },

    includedList: {
        listStyle: "none",
        marginLeft: 0,
        padding: 0,
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        '& > *': {
            flex: '1 1 0',
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            margin: "3px 0"
        }
    },

    detaiLink: {
        display: "block",
        margin: "0.5rem 0"
    },

    icon: {
        color: additionalColors.successColor
    }

}));

export default useStyles;