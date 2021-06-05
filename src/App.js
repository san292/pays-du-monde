
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import About from './pages/About';
import Home from "./pages/Home";
import notFound from './pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route component={notFound} />

        </Switch>
        </BrowserRouter>
    );
};

export default App;







