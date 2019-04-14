import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import TodoPage from 'components/TodoPage'

const Routes = () => (
  <Switch>
    <Route exact path={'/todos'} component={TodoPage} />
    <Redirect to={'/todos'} />
  </Switch>
)


export default Routes
