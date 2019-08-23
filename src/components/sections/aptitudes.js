// @flow

import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import CustomIcon from '../../components/icons/customIcon';

import { getTechnicalSkills } from '../../store/resume/selectors';
import type { TechnicalSkillEntity } from '../../types/entities/technical.skill';
import type { State } from '../../types/redux/states';

type OwnProps = {};

type Props = {
  ...OwnProps,
  items: TechnicalSkillEntity[]
};

const useStyles = makeStyles(theme => theme.technicalSkills);  

function Aptitudes(props: Props) {

  const classes = useStyles();
  const { items } = props;  

  return (
    <React.Fragment >
      { items && items.map((x: TechnicalSkillEntity) => (
          <Chip key={x.friendlyName} 
                color="secondary"
                className={classes.chip}
                label={x.friendlyName} 
                icon={<CustomIcon icon={x.icon} />}
                />
        ))
      }
    </React.Fragment>
  );

}

const mapStateToProps = (state: State) => {
  return {
    items: getTechnicalSkills(state),
  };
};
 
export default connect<Props, OwnProps,  _, _, State, _>(mapStateToProps)(Aptitudes);