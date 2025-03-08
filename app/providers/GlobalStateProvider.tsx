'use client';

import { createContext, useContext, ReactNode, useState } from 'react';

interface GlobalState {
  // Add global state properties here in the future
}

interface GlobalStateContextType {
  state: GlobalState;
  setState: (state: Partial<GlobalState>) => void;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
}

export function GlobalStateProvider({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState: Partial<GlobalState>;
}) {
  const [state, setStateInternal] = useState<GlobalState>({
    ...initialState,
  });

  const setState = (newState: Partial<GlobalState>) => {
    setStateInternal((prev) => ({
      ...prev,
      ...newState,
    }));
  };

  return (
    <GlobalStateContext.Provider value={{ state, setState }}>
      {children}
    </GlobalStateContext.Provider>
  );
}
