import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import { routes } from "./components/routes";
import { Suspense } from "react";
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Container>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              {routes.map(({ label, path, exact, component }) => (
                <Route
                  key={label}
                  path={path}
                  exact={exact}
                  component={component}
                />
              ))}
              <Redirect to="/" />
            </Switch>
          </Suspense>
        </Container>
      </>
    );
  }
}

export default App;
