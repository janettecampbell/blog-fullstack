import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="container">
      <h1>Blog Frontend</h1>

      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Landing {...routerProps} setUser={setUser} />
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
