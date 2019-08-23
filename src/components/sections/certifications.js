// @flow

import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import dateUtils from '../../utils/dateUtils';
import { getCertifications } from '../../store/resume/selectors';
import type { CertificationEntity } from '../../types/entities/certification';
import type { State } from '../../types/redux/states';

type OwnProps = {};
type Props = {
  ...OwnProps,
  items: CertificationEntity[]
};

const useStyles = makeStyles(theme => theme.certifications);

function Certifications(props: Props) {

  const classes = useStyles();
  const { items } = props;

  return (
    <React.Fragment>
      <Typography variant="h6">Certifications</Typography>
      <List >
        { items && items.map( x => 
          (
            <React.Fragment key={x.friendlyName} >
              <ListItem alignItems="flex-start" className={classes.listItem}>
                <ListItemAvatar>
                  <Avatar className={classes.avatar} alt={x.friendlyName} src={x.logoUrl} />
                </ListItemAvatar>
                <ListItemText primary={                  
                      <Typography component="span" variant="body2" className={classes.certification}>
                        {x.friendlyName}
                      </Typography>                  
                    }
                  secondary={
                    <React.Fragment>
                      <Typography component="span" variant="body2" color="textPrimary">
                        {x.issuer}, {dateUtils.makeDateLabel(x)}<br/>
                        { x.identifier &&  ` Identifier ${x.identifier}` }
                      </Typography>       
                      { x.url && 
                        <Link href={x.url} variant="body2" target="_blank" rel="noreferrer">
                          View certificate
                        </Link>
                      }
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />          
            </React.Fragment>
          ))
        }
      </List>
    </React.Fragment>          
  )
}

const mapStateToProps = (state: State) => {
  return {
    items: getCertifications(state),
  };
};

export default connect<Props, OwnProps,  _, _, State, _>(mapStateToProps)(Certifications);
