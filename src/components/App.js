import React, { useEffect } from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer.js";
import 'semantic-ui-css/semantic.min.css';
import "./App.css"


// the App component should render out the GifListContainer component
//const myKey = "76W63N4nXvRXOuT0i4flqesqMlJl20Yj"

function App() {

  useEffect(() => {
    document.title = "Giphy App"

    return (() => {})
  }, [])

  return (
    <div className="body">
      <NavBar style={{width:"80%"}} color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;
