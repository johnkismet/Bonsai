import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
// components
import TreeFarm from "./components/treeFarm/treeFarm";
import NewTree from "./components/newTree/newTree";
import MissingPage from "./components/missingPage/MissingPage";
import Tree from "./components/tree/Tree";
import Store from "./components/Store/Store";
import Statistics from "./components/Statistics/Statistics";
import Archive from "./components/Archive/Archive";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <TreeFarm />
          </Route>
          <Route exact path="/store">
            <Store />
          </Route>
          <Route exact path="/archive">
            <Archive />
          </Route>
          <Route exact path="/Statistics">
            <Statistics />
          </Route>
          <Route exact path="/newTree">
            <NewTree />
          </Route>
          <Route exact path="/trees/:id">
            <Tree />
          </Route>
          <Route exact path="*">
            <MissingPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
