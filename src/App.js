import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'typeface-roboto';

import Main from './components/main';
import * as actions from './store/resume/actions';

const App = props => {

  useEffect( () => {
    async function fetchData() {
      await props.getResume();
    }    
    fetchData();
  });

  return (
    <Main />
  );

}

export default connect(null, { getResume: actions.getResume })(App);
