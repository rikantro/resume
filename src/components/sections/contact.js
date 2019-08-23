// @flow

import React from 'react';
import { connect } from 'react-redux';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { getOwner } from '../../store/resume/selectors';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import MapIcon from '@material-ui/icons/Map';
import GitHubIcon from '../icons/github';

import type { State } from '../../types/redux/states';
import type { OwnerEntity } from '../../types/entities/owner';

type OwnProps = {};
type Props = {
  ...OwnProps,
  owner: OwnerEntity | void
};

const useStyles = makeStyles(theme => theme.contact);

function Contact(props: Props) {

  const { owner } = props;    
  const classes = useStyles();

  if (!owner) {
    return null;
  }

  return (
    <React.Fragment>
      <PhoneIcon />
      <Link variant="body2" href={`tel:${owner.contact.phone}`} className={classes.text}>
        {owner.contact.phone}<br /> 
      </Link>    
      <EmailIcon />
      <Link variant="body2" href={`mailto:${owner.contact.email}`} className={classes.text}>
        {owner.contact.email}<br/>
      </Link> 
      <GitHubIcon />
      <Link href={owner.contact.github} target="_blank" className={classes.text} variant="body2" rel="noreferrer">
        {owner.contact.github}<br />  
      </Link>
      <MapIcon />
      <Link href={`https://maps.google.com/maps?q=${owner.contact.city}`} target="_blank" variant="body2" className={classes.text}>   
        {owner.contact.city}  
      </Link>  
    </React.Fragment>
  );

} 

const mapStateToProps = (state: State) => {
  return {
    owner: getOwner(state),
  };
};
 
export default connect<Props, OwnProps,  _, _, State, _>(mapStateToProps)(Contact);
