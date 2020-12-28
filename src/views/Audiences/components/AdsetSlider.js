import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid, Button, Typography, Box, Slider, Hidden
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    boxShadow: '0px 7.74349px 19.3587px rgba(150, 117, 206, 0.1)',
    borderRadius: 3,
    marginTop: 30
  },
  descriptionWrapper: {
    padding: '10px 30px',
    borderRight: '1.2px solid #F2F4FF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      borderRight: 0
    }
  },
  titleText: {
    fontSize: 12,
    lineHeight: '30px',
    color: '#000000'
  },
  valueText: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '30px',
    color: '#7986CC'
  },
  sliderWrapper: {
    flex: 1,
    padding: '0 30px',
    background: 'linear-gradient(180deg, rgba(241, 241, 241, 0.46) 0%, rgba(255, 255, 255, 0) 100%, rgba(255, 227, 227, 0) 100%)',
    borderRadius: 65,
    margin: '0 20px',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 25,
      marginTop: 5
    }
  },
  buttonWrapper: {
    borderLeft: '1.2px solid #F2F4FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px 0',
    [theme.breakpoints.down('sm')]: {
      borderLeft: 0,
      justifyContent: 'flex-end',
      paddingRight: 30
    }
  },
  createButton: {
    background: '#7986CC',
    borderRadius: 45,
    color: '#ffffff',
    fontSize: 13,
    fontWeight: 600,
    padding: '10px 20px',
    '&:hover': {
      background: 'rgba(121, 134, 204, 0.2)'
    },
    '&:disabled': {
      background: 'rgba(121, 134, 204, 0.2)'
    },
    [theme.breakpoints.down('xs')]: {
      padding: '5px 20px',
    }
  },
  sliderRoot: {
    padding: '10px 0'
  },
  thumb: {
    width: 54,
    height: 30,
    marginTop: -35,
    background: '#7986CC',
    boxShadow: '0px 11.7286px 29.3216px rgba(150, 117, 206, 0.1) !important',
    borderRadius: 15,
    marginLeft: -13,
  },
  thumbComponent: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px'
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#ffffff'
  },
  thumbText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center'
  },
  rail: {
    background: 'transparent'
  },
  track: {
    background: '#7986CC'
  },
  mark: {
    width: 0,
    height: 0
  },
  markLabel: {
    top: 35,
    fontWeight: 500,
    color: '#7986CC'
  },
  scaleWrapper: {
    paddingTop: 10,
  },
  scale: {
    borderRight: '2px solid #F3F3F3',
    height: 10,
    width: '1.666667%',
    '&:first-child': {
      borderLeft: '2px solid #F3F3F3',
    }
  }
}));

const marks = [
  {
    value: 0,
    label: '0'
  },
  {
    value: 100 / 6,
    label: '1'
  },
  {
    value: 200 / 6,
    label: '2'
  },
  {
    value: 300 / 6,
    label: '3'
  }, {
    value: 400 / 6,
    label: '4'
  }, {
    value: 500 / 6,
    label: '5'
  }, {
    value: 100,
    label: '6'
  }
];

const emptyArray = new Array(60).fill('');

const AdsetSlider = ({
  addsetCount, budget, interests, onChangeSlider, onCreateAddset
}) => {
  const classes = useStyles();

  const ThumbComponent = (props) => (
    <span {...props}>
      <Box className={classes.thumbComponent}>
        <Box className={classes.dot} />
        <Typography className={classes.thumbText}>{addsetCount}</Typography>
      </Box>
    </span>
  );
  const ValueComponent = ({ children }) => (
    <Box>
      <Grid className={classes.scaleWrapper} container>
        {
            emptyArray.map((item, index) => (
              <Box key={index} className={classes.scale} />
            ))
          }
      </Grid>
      {children}
    </Box>
  );
  return (
    <Grid className={classes.root} container alignItems="center">
      <Grid item className={classes.descriptionWrapper} md={3} sm={6} xs={6}>
        <Typography className={classes.titleText}>
          <span className={classes.valueText}>{`$${budget} `}</span>
          campaign budget
        </Typography>
        <Typography className={classes.titleText}>
          <span className={classes.valueText}>{`${interests} `}</span>
          interests
        </Typography>
      </Grid>
      <Hidden mdUp>
        <Grid item className={classes.buttonWrapper} md={3} sm={6} xs={6}>
          <Button className={classes.createButton} onClick={onCreateAddset}>create adsets</Button>
        </Grid>
      </Hidden>
      <Grid item className={classes.sliderWrapper} md={6} sm={12}>
        <Slider
          classes={{
            root: classes.sliderRoot,
            thumb: classes.thumb,
            mark: classes.mark,
            rail: classes.rail,
            track: classes.track,
            markLabel: classes.markLabel
          }}
          value={addsetCount * 100 / 6}
          defaultValue={50}
          ValueLabelComponent={ValueComponent}
          aria-labelledby="discrete-slider-always"
          ThumbComponent={ThumbComponent}
          step={100 / 6}
          marks={marks}
          onChange={onChangeSlider}
        />
      </Grid>
      <Hidden smDown>
        <Grid item className={classes.buttonWrapper} md={3} sm={12}>
          <Button className={classes.createButton} onClick={onCreateAddset}>create adsets</Button>
        </Grid>
      </Hidden>
    </Grid>
  );
};

AdsetSlider.propTypes = {
  onChangeSlider: PropTypes.func,
  onCreateAddset: PropTypes.func,
  budget: PropTypes.number,
  interests: PropTypes.number,
  addsetCount: PropTypes.number
};

export default AdsetSlider;
