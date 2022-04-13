import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ManageDocumentPage from "./components/ManageDocumentPage";
import Profile from "./components/profile";
import Upload from "./components/upload";
import Signature from "./components/signature";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Routes />
        </Switch>
      </Router>
    </div>
  );
}

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/homepage" exact component={Homepage} />
      <Route path="/ManageDocument" exact component={ManageDocumentPage} />
      <Route path="/profile" exact component = {Profile} />
      <Route path="/upload" exact component = {Upload} />
      <Route path="/signature" exact component={Signature} />
      {/* Where all your routes will be put */}
    </div>
  );
};

export default App;
