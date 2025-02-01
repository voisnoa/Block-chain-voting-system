import React from 'react';
import Home from './components/Home';
import Vote from './components/Vote';
import Results from './components/Results';
import NotFound from './components/NotFound';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/vote" component={Vote} />
                <Route path="/results" component={Results} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default Routes;