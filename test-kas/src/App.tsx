import { Provider } from "react-redux";
import "./App.css";
import CardNews from "./components/CardNews";
import { DataAllNewsContextProvider } from "./context/DataAllNews.Provider";
import { DataNewsContextProvider } from "./context/DataNews.Provider";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <DataAllNewsContextProvider>
          <DataNewsContextProvider>
            <CardNews></CardNews>
          </DataNewsContextProvider>
        </DataAllNewsContextProvider>
      </Provider>
    </>
  );
}

export default App;
