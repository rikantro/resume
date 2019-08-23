// @flow

import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

import { getSkills } from '../../store/resume/selectors';
import type { SkillEntity } from '../../types/entities/skill';
import type { State } from '../../types/redux/states';

type OwnProps = {};
type Props = {
  ...OwnProps,
  items: SkillEntity[]
};

const useStyles = makeStyles(theme => theme.skills);

function Skills(props : Props) {

  const classes = useStyles();
  const { items } = props;    

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6">Skills</Typography>
      </Grid>  
      { items && items.map( x=> (
          <Grid item xs={6} key={x.friendlyName} className={classes.item}>
            <Typography variant="body2" component={'span'} >
              <span className={classes.text}>{x.friendlyName}</span>
              <LinearProgress variant="determinate" value={x.percentage}/>
            </Typography>            
          </Grid>          
        ))
      }      
    </Grid>);

} 

const mapStateToProps = (state: State) => {
  return {
    items: getSkills(state),
  };
};
 
export default connect<Props, OwnProps,  _, _, State, _>(mapStateToProps)(Skills);
