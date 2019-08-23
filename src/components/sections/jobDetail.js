// @flow

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import dateUtils from '../../utils/dateUtils';

import type { JobEntity } from '../../types/entities/job';
type Props = JobEntity;

const makeLabel = (data) => 
  (<React.Fragment>{data.city}, {dateUtils.makeRangeLabel(data)}</React.Fragment>);

const useStyles = makeStyles(theme => theme.jobDetail); 

export default function JobDetail(props : Props) {

  const classes = useStyles();
  const { achievements } = props;

  return (
    <React.Fragment>
      <Typography variant="body2">
        {makeLabel(props)}
      </Typography>
      { achievements && achievements.map( (detail, index) => (
        <Typography key={index} variant="body2" component="span" className={classes.main}>      
          {'* '}{detail}<br/>
        </Typography>          
        ))
      }
    </React.Fragment>
  );

}