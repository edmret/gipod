import React, {createContext, useContext, useReducer, Dispatch} from 'react';

export interface IUserInfo{
  FirstName: string,
  LastName: string,
  Email: string,
  Phone: string,
  BirthDate: string
}

export interface DonWidgetState {
    imeiDevice?: any,
    currentRoute?: string,
    userInfo?: IUserInfo,
    deviceInfo?: any
}

export const StateContext = createContext({currentRoute: '/'} as DonWidgetState);

export const StateProvider= ( {reducer, initialState, children} ) => (
  <StateContext.Provider value={useReducer(reducer, initialState) as DonWidgetState}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext) as [DonWidgetState, Dispatch<any>];