import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import ReactTable from "./pages/ReactTable";
import MaterialUi from "./pages/MaterialUi";

function App() {
  return (
    <div className="container">
      <Router>
        <div>
        <Navbar/>
        <Route exact path="/GovOfficeEmployees" component={Main}/>
        <Route exact path="/react" component={Main}/>
        <Route exact path="/react-table" component={ReactTable} />
        <Route exact path="/material-ui" component={MaterialUi} />
        </div>
        </Router>
    </div>
  );
}

export default App;