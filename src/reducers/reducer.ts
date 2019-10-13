import {DonWidgetState} from '../stores/Store';

export const reducer = (state: DonWidgetState, action): DonWidgetState => {
    
    return (
        {
            'setIMEIDevice': { ...state, imeiDevice: action.imeiDevice },
            'setRoute': { ...state, currentRoute: action. currentRoute}
        }
    )[action.type] || state
};
