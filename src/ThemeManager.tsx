import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { MuiThemeProvider } from '@material-ui/core/styles';

import PurpleTheme from './_themes/purple.theme';
import PinkTheme from './_themes/pink.theme';

import { StateRouterRender } from './_stateRouter/routerRender';

import { PhoneInfo } from './UserInfo/PhoneInfo';
import fire from './fire';

import { useStateValue } from './stores/Store';

import createMyTheme from './_themes/_create_my_theme';


export const ThemeManager: React.FC = () => {
    //TODO: make a switchable theme
    const [theme, setTheme] = React.useState(PinkTheme);

    const [{ sponsorConfig }, dispatch] = useStateValue();

    const setThemeConfig = (themeConfig) => {
        const theme = createMyTheme(themeConfig);
        setTheme(theme);
    };

    //69, 77, 174

    const updateThemeFromSnapshot = snapshot => {
        const config = snapshot.val();

        let cssString = config.css || config;
        cssString = cssString.replace('"{', '{');
        cssString = cssString.replace('}"', '}');
        
        const css = JSON.parse(cssString);
        setThemeConfig(css);
    };


    useEffect(
        () => {

            const configC = window['CHUBB_API_CONFIG'];
            const profileRef = fire.database().ref('config').child(`${configC.appId}`);

            profileRef.once('value').then(snapshot => updateThemeFromSnapshot(snapshot));

            profileRef.on("child_changed", (snapshot) => updateThemeFromSnapshot(snapshot));
        }, []
    );

    return (
        <MuiThemeProvider theme={theme}>
            <Container>
                <PhoneInfo />
                <StateRouterRender />
            </Container>
        </MuiThemeProvider>
    );
}
