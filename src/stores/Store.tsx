import React, {createContext, useContext, useReducer, Dispatch} from 'react';

interface DonWidgetState {
    imeiDevice?: any
}

interface IStateProvider {
    reducer: (prevState: DonWidgetState, action: Dispatch<any>) => DonWidgetState,
    initialState: DonWidgetState,
    children: React.ReactNode
}

export const StateContext = createContext({} as DonWidgetState);

export const StateProvider= ( {reducer, initialState, children} ) => (
  <StateContext.Provider value={useReducer(reducer, initialState) as DonWidgetState}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext) as [DonWidgetState, Dispatch<any>];