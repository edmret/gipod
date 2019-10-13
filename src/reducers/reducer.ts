import {DonWidgetState} from '../stores/Store';

export const reducer = (state: DonWidgetState, action): DonWidgetState => {
    
    return (
        {
            'setIMEIDevice': { ...state, imeiDevice: action.imeiDevice },
            'setRoute': { ...state, currentRoute: action. currentRoute},
            'saveDeviceInfo': { ...state, deviceInfo: action.deviceInfo }
        }
    )[action.type] || state
};
