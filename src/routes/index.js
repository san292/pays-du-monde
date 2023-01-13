import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, About, NotFound } from '../pages';

export const RouteIndex = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};
