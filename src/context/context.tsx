import React, { useState } from "react";

interface IContextProps {
  state: {};
  loadMoreData: () => void;
}

export const Context = React.createContext({} as IContextProps);

export function ContextProvider(props: any) {
  const [state, updateState] = useState({});

  const loadMoreData = async () => {
    /* Fetch more data
      -- fetch
      -- updateState
    */
  }

  const value = { state, loadMoreData };

  return (
    <Context.Provider value={value}>{props.children}</Context.Provider>
  );
}