import React from 'react';
import {useStateValue} from '../stores/Store';

import ProductsContainer from '../product/ProductsContainer';
import {UserForm} from '../UserInfo/UserForm';
import {AddressForm} from '../UserInfo/AddressForm';
import {PaymentForm} from '../payment/PaymentForm';
import {DeviceInfoForm} from '../InsuredThing/DeviceInfo';
import {SuccessPaymentForm} from '../payment/SuccessPayment';

export interface IStateRouteRender{
    
}

export interface IStateLink{
    href: string,
    onClick?: () => any
}

export const StateRouterRender: React.FC<IStateRouteRender> =  ({}) => {

    const [ {currentRoute}, dispatch ] = useStateValue();
    
    
    const currentComponent = (route:string) =>{

        switch(route) {
            case '/':
                return <ProductsContainer />;
            case 'user-data':
                return <UserForm />;
            case 'payment-form':
                return <PaymentForm />;
            case 'address-form':
                return <AddressForm />;
            case 'success-payment':
                return <SuccessPaymentForm />;
            case 'device-info':
                return <DeviceInfoForm />;
        }

        return <div>Please set a valid Route, the current "{route}"</div>;
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

export const StateLink: React.FC<IStateLink> = ({ onClick, href, children}) => {
    

    const [ {currentRoute}, dispatch ] = useStateValue();

    const handleClick = () => {
        onClick && onClick();
        dispatch({type: 'setRoute', currentRoute: href});
    }

    return (
        <span onClick={handleClick}>
            {children}
        </span>
    );
}