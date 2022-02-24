import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"}>
        Home
      </Route>
      <Route path={"/register"}>Cadastro</Route>
      <Route path={"/login"}>
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
