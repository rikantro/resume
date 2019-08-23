// @flow

import React from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { getOwner } from '../../store/resume/selectors';
import Grid from '@material-ui/core/Grid';

import type { State } from '../../types/redux/states';
import type { OwnerEntity } from '../../types/entities/owner';

type OwnProps = {};
type Props = {
  ...OwnProps,
  owner: OwnerEntity | void
};

const useStyles = makeStyles(theme => theme.header);

function Header(props: Props) {

  const { owner } = props;    
  const classes = useStyles();

  if (!owner) {
    return null;
  }
  
  return (
    <Grid container spacing={1}>
      <Grid item md={2} xs={12}>
        <Avatar src={owner.avatarUrl} className={classes.avatar} />
      </Grid>
      <Grid item md={10} xs={12}>
        <Typography variant="h5">
          {owner.fullName}<br/>    
        </Typography>
        <Typography variant="h6">          
          {owner.title}
        </Typography>               
      </Grid>
    </Grid>); 
  
} 

const mapStateToProps = (state: State) => {
  return {
    owner: getOwner(state),
  };
};
 
export default connect<Props, OwnProps,  _, _, State, _>(mapStateToProps)(Header);
