import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Stepper, Step, StepConnector, StepLabel
} from '@material-ui/core';
import Check from '@material-ui/icons/Check';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';

const useStyles = makeStyles(() => ({
  stepperRoot: {
    flex: 1,
    flexWrap: 'wrap',
    background: 'transparent',
    padding: 0,
    margin: 'auto'
  },
  stepConnector: {
    borderColor: '#F2F4FF',
    borderWidth: 4,
    borderRadius: 2,
    marginBottom: 10
  },
  step: {
    padding: 0,
    marginBottom: 10
  },
  stepLabel: {
    background: '#fff',
    borderRadius: 40,
    height: 25,
    padding: '5px 16px',
    textTransform: 'capitalize'
  },
  label: {
    color: '#C4C4C4',
    fontWeight: 600,
    '&$completedLabel': {
      fontWeight: 600,
      color: '#7986CC',
    }
  },
  completedLabel: {},
  stepIconRoot: {
    color: '#C4C4C4',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  stepIconCircle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  stepIconCompleted: {
    color: '#7986CC',
    zIndex: 1,
    fontSize: 18,
  },
}));

const steps = ['Layering', 'Campaign', 'Adsets', 'Preferences', 'Ads', 'Summary'];

const StepIcon = (props) => {
  const classes = useStyles();
  const { active, completed } = props;
  return (
    <div
      className={classes.stepIconRoot}
    >
      { completed && <Check className={classes.stepIconCompleted} />}
      { active && <GolfCourseIcon className={classes.stepIconCompleted} /> }
      { !active && !completed && <div className={classes.stepIconCircle} />}
    </div>
  );
};

const CustomStepper = ({ activeStep }) => {
  const classes = useStyles();

  return (
    <Stepper
      classes={{ root: classes.stepperRoot }}
      activeStep={activeStep}
      connector={<StepConnector classes={{ line: classes.stepConnector }} />}
    >
      {
        steps.map((step) => (
          <Step className={classes.step} key={step}>
            <StepLabel
              classes={{
                root: classes.stepLabel,
                label: classes.label,
                completed: classes.completedLabel,
                active: classes.completedLabel
              }}
              StepIconComponent={StepIcon}
            >
              {step}
            </StepLabel>
          </Step>
        ))
      }
    </Stepper>
  );
};

CustomStepper.propTypes = {
  activeStep: PropTypes.number
};

StepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool
};

export default CustomStepper;
