import React from 'react';
import {useStateValue} from '../stores/Store';

import ProductsContainer from '../product/ProductsContainer';

export interface IStateRouteRender{
    
}

export interface IStateLink{
    href: string
}

export const StateRouterRender: React.FC<IStateRouteRender> =  ({}) => {

    const [ {currentRoute}, dispatch ] = useStateValue();
    
    
    const currentComponent = (route:string) =>{

        switch(route){
            case '/':
                return <ProductsContainer />;
        }

        return <div></div>
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