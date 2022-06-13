import "./App.css";
import { Provider } from "react-redux";
import { SportsStoreDataStore } from "./data/DataStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShopData from "./ShopConnector";
import React from "react";

function App() {
  return (
    <Provider store={SportsStoreDataStore}>
      <Router>
        <Routes>
          <Route path="/shop" component={ShopData} />
          <Route path="/" />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
