// @flow

import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';

import { getExperience } from '../../store/resume/selectors';
import JobDetail from './jobDetail';
import type { JobEntity } from '../../types/entities/job';
import type { State } from '../../types/redux/states';

type OwnProps = {};
type Props = {
  jobs: JobEntity[]
}

const useStyles = makeStyles(theme => theme.experience); 

function Experience(props: Props) {

  const classes = useStyles();
  const { jobs } = props;
  const activeStep = jobs.length;
  
  return (
    <div>
      <Typography variant="h6">Work Experience</Typography>
      <Stepper activeStep={activeStep} className={classes.stepper} orientation="vertical">
        { jobs && jobs.map((item, index) => (
          <Step key={item.employer}>
            <StepLabel>
              <Typography className={classes.workItem}>{item.jobTitle} at {item.employer}</Typography>
            </StepLabel>
            <StepContent className={classes.stepContent} TransitionProps={{in: true}}>
              <JobDetail key={index} {...item} />
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );

}

const mapStateToProps = (state: State) => {
  return {
    jobs: getExperience(state),
  };
};

export default connect<Props, OwnProps,  _, _, State, _>(mapStateToProps)(Experience);
