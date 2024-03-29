/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { green, blue, orange } from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';

export const useStyles = makeStyles((theme, props )=> ({
  root: {
    fle: 1,
    flexGrow: 1,
    fontSize: 15,
    paddingBottom: 100,
    paddingTop: 40,
  },
  h1: {
    color: '#3d5170',
    fontSize: '45px',
    lineHeight: '1em',
    margin: '60px 0',
  },
  span: {
    fontWeight: 'bold',
  },
  h2: {
    color: '#3d5170',
    fontSize: '3em',
    lineHeight: '1em',
    fontWeight: '500',
    marginBottom: '30px',
  },
}));
export const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export const BlueCheckbox = withStyles({
  root: {
    color: blue[400],
    '&$checked': {
      color: blue[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export const RedCheckbox = withStyles({
  root: {
    color: orange[400],
    '&$checked': {
      color: orange[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);
