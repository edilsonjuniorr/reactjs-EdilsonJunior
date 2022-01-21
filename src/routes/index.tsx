import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  Characters,
  Comics,
  Creators,
  Hub
} from '../pages'

const Routes: React.FC = () => (
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={Hub} />
        <Route exact path="/characters" component={Characters} />
        <Route exact path="/comics" component={Comics} />
        <Route exact path="/creators" component={Creators} />
      </Switch>
    </React.StrictMode>
  </Router>
)

export default Routes