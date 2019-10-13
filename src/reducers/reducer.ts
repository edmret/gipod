export const reducer = (state, action) => {
    
    return (
        {
            'setIMEIDevice': { ...state, imeiDevice: action.imeiDevice }     
        }
    )[action.type] || state
};
