import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import store from "./stores";
import Routes from "./routes/Routes"

function App() {
  return (
    <Provider store={store} >
        <Routes/>
    </Provider>
  )
}

export default App;