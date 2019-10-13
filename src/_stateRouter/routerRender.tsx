import React from 'react';
import {useStateValue} from '../stores/Store';
import {IRoute} from '../routes';

import ProductsContainer from '../product/ProductsContainer';

export interface IStateRouteRender{
    
}

export interface IStateLink{
    href: string
}

export const StateRouterRender: React.FC<IStateRouteRender> =  ({}) => {

    const [ {currentRoute}, dispatch ] = useStateValue();
    
    
    const currentComponent = (route:string) =>{

        console.log('theCurrentRoute', route);

        switch(route){
            case '/':
                return <ProductsContainer />;
        }

        return <div>hjghdgasjhdgsdf</div>
    }

    return React.useMemo(
        () => (
            <>
               {currentComponent(currentRoute)} 
            </>
        ), 
        [currentRoute]
    )
    
}

export const StateLink: React.FC<IStateLink> = ({href, children}) => {
    

    const [ {currentRoute}, dispatch ] = useStateValue();

    const handleClick = () => dispatch({type: 'setRoute', currentRoute: href});

    return (
        <span onClick={handleClick}>
            {children}
        </span>
    )
}