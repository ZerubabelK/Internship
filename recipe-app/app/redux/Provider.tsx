"use client";
import { Provider } from "react-redux";

import { store } from "./store";

interface ProviderProps {
  children: React.ReactNode;
}

const ReduxProvider = ({ children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
