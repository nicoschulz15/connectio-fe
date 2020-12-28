import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
  Box, Grid, Button, Hidden, Divider
} from '@material-ui/core';
import Page from 'components/Page';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Stepper from './components/Stepper';
import Header from './components/Header';
import AdsetSlider from './components/AdsetSlider';
import AdsetList from './components/AdsetList';
import mockData from './mockData';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    background: '#FBFBFD',
    padding: '24px 45px',
    [theme.breakpoints.down('sm')]: {
      padding: '24px 15px',
    }
  },
  backButton: {
    background: '#F1F4FB',
    borderRadius: 40,
    color: '#7986CC',
    fontWeight: 600,
    fontSize: 11,
    lineHeight: '15px',
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    height: 'fit-content',
    textTransform: 'unset',
    marginRight: 20,
    marginBottom: 10
  },
  testButton: {
    borderRadius: 40,
    color: '#7986CC',
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: '18px',
    textTransform: 'capitalize',
    marginLeft: 20,
    marginBottom: 10,
    height: 'fit-content'
  },
  divider: {
    background: '#EAEAEA'
  },
  footerWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#ffffff',
    '& $backButton': {
      margin: 0,
      height: 40,
      width: 90
    },
    padding: '24px 45px',
    [theme.breakpoints.down('sm')]: {
      padding: '15px',
    }
  },
  continueButton: {
    background: '#9176C8',
    borderRadius: 30,
    height: 40,
    width: 150,
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 600
  }
}));

const Audiences = () => {
  const classes = useStyles();
  const [activeStep] = useState(2);
  const [addsetCount, setAddsetCount] = useState(3);
  const [adsetList, setAdsetList] = useState(mockData);

  useEffect(() => {
    setAdsetList(mockData.slice(0, addsetCount));
  }, [addsetCount]);

  const onClickBackConnectio = () => {
    console.log('click back to connectio');
  };

  const handleClickShuffleAudiences = () => {
    console.log('click Shuffle Audiences');
  };

  const handleClickUndo = () => {
    console.log('click Undo');
  };

  const handleChangeSlider = (event, value) => {
    setAddsetCount(value * 0.06);
  };

  return (
    <Page
      className={classes.root}
      title="Audiences"
    >
      <Box className={classes.content}>
        <Grid container>
          <Grid item xs={6} sm={6} md={2}>
            <Button
              className={classes.backButton}
              startIcon={<ArrowBackIcon />}
              onClick={onClickBackConnectio}
            >
              Back to Connectio
            </Button>
          </Grid>
          <Hidden mdUp>
            <Grid item container xs={6} sm={6} justify="flex-end">
              <Button className={classes.testButton}>Test Audiences</Button>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={12} md={8}>
            <Stepper activeStep={activeStep} />
          </Grid>
          <Hidden smDown>
            <Grid item container md={2} justify="flex-end">
              <Button className={classes.testButton}>Test Audiences</Button>
            </Grid>
          </Hidden>
        </Grid>
        <Header
          onClickShuffleAudiences={handleClickShuffleAudiences}
          onClickUndo={handleClickUndo}
        />
        <AdsetSlider
          budget={15000}
          interests={22}
          addsetCount={addsetCount}
          onChangeSlider={handleChangeSlider}
        />
        <AdsetList data={adsetList} />
      </Box>
      <Divider className={classes.divider} />
      <Box className={classes.footerWrapper}>
        <Button className={classes.backButton} startIcon={<ArrowBackIcon />}>BACK</Button>
        <Button className={classes.continueButton}>Continue</Button>
      </Box>
    </Page>
  );
};

export default Audiences;
