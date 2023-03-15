import { createContext } from "react";
import "./App.css";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import { globalData } from "./globalData";


export const Global = createContext();

function App() {
  return (
    <div className="App">
      <Header/>
      <Global.Provider value={globalData}>
        <Container/>
      </Global.Provider>
    </div>
  );
}

export default App;
