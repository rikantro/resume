import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => theme.unavailable);

export default function Unavailable() {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Resume data is not available.
        </Typography>
        <Typography component="p">
          Please return later
        </Typography>
      </Paper>
    </div>
  );
}