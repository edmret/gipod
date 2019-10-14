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


    useEffect(
        () => {

            const configC = window['CHUBB_API_CONFIG'];
            const profileRef = fire.database().ref('config').child(`"${configC.appId}"`);

            profileRef.once('value').then(snapshot => {
                const config = snapshot.val();
                config.css = config.css.replace('"{', '{');
                config.css = config.css.replace('}"', '}');
                
                const css = JSON.parse(config.css);
                setThemeConfig(css);
            });

            profileRef.on("child_changed", snapshot => {
                console.log("the snapshot", snapshot.val());
            });
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
