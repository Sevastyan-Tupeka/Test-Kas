import { createContext, ReactNode, useContext } from "react";
import { IData_SnippetNews } from "../components/CardNews/type";
import { dataAllNews } from "../dataAllNews";

export const DataAllNewsContext =
  createContext<IData_SnippetNews[]>(dataAllNews);

export function DataAllNewsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <DataAllNewsContext.Provider value={dataAllNews}>
      {children}
    </DataAllNewsContext.Provider>
  );
}

export const useDataAllNewsContext = () => useContext(DataAllNewsContext);
