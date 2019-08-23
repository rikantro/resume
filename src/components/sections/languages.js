// @flow

import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getLanguages } from '../../store/resume/selectors';
import type { SkillEntity } from '../../types/entities/skill';
import type { State } from '../../types/redux/states';

type OwnProps = {};
type Props = {
  ...OwnProps,
  items: SkillEntity[]
};

const useStyles = makeStyles(theme => theme.languages);

function Languages(props : Props) {

  const classes = useStyles();
  const { items } = props;    

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Typography variant="h6">Languages</Typography>
      </Grid>  
      { items && items.map( x=> (
          <Grid item xs={6} key={x.friendlyName}>
            <Typography variant="body2" component={'span'} className={classes.item}>
              <span className={classes.text}>{x.friendlyName}</span>
              <CircularProgress className={classes.progress} variant="static" value={x.percentage} size={35}/>
            </Typography>            
          </Grid>          
        ))
      }      
    </Grid>
    );

} 

const mapStateToProps = (state: State) => {
  return {
    items: getLanguages(state),
  };
};
 
export default connect<Props, OwnProps,  _, _, State, _>(mapStateToProps)(Languages);
