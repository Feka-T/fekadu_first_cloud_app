import logo from "./logo.svg";
import "./App.css";
import { React } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          <strong>
            This is the first React Website Project uploded and deployed online
            by Fekadu Tadesse.
          </strong>
        </p>

        <p>
          <strong>
            ይህ በፍቃዱ ታደሰ የሪያክት ፕሮጀክት አፕሎድ የተደረገ የመጀመሪያው የሙከራ ኦንላይን ዌብሳይት ነው።
          </strong>
        </p>
      </header>
    </div>
  );
}

export default App;
