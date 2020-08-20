import React, { createContext, useContext, useReducer } from "react";
/* preparing the context for data layer (just we can say that we are preparing the place for the data layer to lives) with the createContext()*/
export const StateContext = createContext();

/* sets the data in the data layer */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

/* pulls the data from the data layer */
export const useStateValue = () => useContext(StateContext);
