/* eslint-disable import/no-extraneous-dependencies */
import React, { memo } from 'react';
import { Route, Redirect } from 'react-router';

const ProtectedRoute = ({ component: Comp, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authenticated ? <Comp {...props} /> : <Redirect to="/login" />
    }
  />
);

export default memo(ProtectedRoute);
