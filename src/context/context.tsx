import React, { Dispatch, useReducer } from "react";
import { Actions, initialState, IState, reducer } from "./reducer";

interface IContextProps {
  state: IState;
  dispatch: Dispatch<Actions>;
}

export const Context = React.createContext({} as IContextProps);

export function ContextProvider(props: any) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return (
    <Context.Provider value={value}>{props.children}</Context.Provider>
  );
}