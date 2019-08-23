// @flow

import React from 'react';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import { getSummary } from '../../store/resume/selectors';

import type { State } from '../../types/redux/states';

type OwnProps = {};
type Props = {
  ...OwnProps,
  description: string
}

function Summary(props: Props) {

  const { description } = props;
  return (
    <Typography variant="body2">
      {description}
    </Typography>
  );

}

const mapStateToProps = (state: State) => {
  return {
    description: getSummary(state),
  };
};
 
export default connect<Props, OwnProps,  _, _, State, _>(mapStateToProps)(Summary);
