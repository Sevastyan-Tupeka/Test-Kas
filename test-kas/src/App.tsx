import "./App.css";
import CardNews from "./components/CardNews";
import { DataContextProvider } from "./context/Data.Provider";

function App() {
  return (
    <>
      <DataContextProvider>
        <CardNews></CardNews>
      </DataContextProvider>
    </>
  );
}

export default App;
