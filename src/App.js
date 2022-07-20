import "./App.css";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import UpdateBlogForm from "./components/forms/UpdateBlogForm";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => (
            <Landing {...routerProps} user={user} setUser={setUser} />
          )}
        />

        <Route
          path="/home"
          render={(routerProps) => <Home {...routerProps} user={user} />}
        />

        <Route
          path="/about"
          render={(routerProps) => <About {...routerProps} user={user} />}
        />

        {/* <Route path="/update/:id" component={UpdateBlogForm} /> */}
      </Switch>
    </div>
  );
}

export default App;
