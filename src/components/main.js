// @flow

import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';

import Cover from './cover';
import Unavailable from './unavailable';
import LoadingResume from './loading';

import { hasError, isLoading } from '../store/resume/selectors';
import type { State } from '../types/redux/states';

type OwnProps = {};
type Props = {
  ...OwnProps,
  hasError: boolean,
  isLoading: boolean
};

function Main(props: Props) {

  const { hasError, isLoading } = props;
  return (
    <Container maxWidth="md">
      { hasError ? (<Unavailable/> ) : ( isLoading ? <LoadingResume /> : <Cover/>)
      }
    </Container>
  );
}

const mapStateToProps = (state: State) => {
  return {
    hasError: hasError(state),
    isLoading: isLoading(state)
  };
};
 
export default connect<Props, OwnProps,  _, _, State, _>(mapStateToProps)(Main);
