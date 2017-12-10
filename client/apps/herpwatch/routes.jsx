// if you use jsx, you have to import React
import React                          from 'react';
import { Router, Route, IndexRoute }  from 'react-router';

import appHistory                     from './history';
import Index                          from './components/layout/index';
import Reptiles                           from './components/reptiles';
import NotFound                       from './components/common/not_found';
import Species from './components/species';

export default (
  <Router history={appHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={Reptiles} />
      <Route path="/species" component={Species} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
