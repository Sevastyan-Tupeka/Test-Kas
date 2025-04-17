import { createContext, ReactNode, useContext } from "react";
import { IData_SnippetNews } from "../components/CardNews/type";
import { dataNews } from "../dataNews";

export const DataNewsContext = createContext<IData_SnippetNews>(dataNews);

export function DataNewsContextProvider({ children }: { children: ReactNode }) {
  return (
    <DataNewsContext.Provider value={dataNews}>
      {children}
    </DataNewsContext.Provider>
  );
}

export const useDataNewsContext = () => useContext(DataNewsContext);
