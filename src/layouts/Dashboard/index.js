import React, { Suspense, useState } from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { LinearProgress } from '@material-ui/core';
import NavBar from './NavBar';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: '#FFFFFF'
  },
  rightWrapper: {
    zIndex: theme.zIndex.drawer + 1,
    flexGrow: 1,
    // paddingLeft: 30,
    // [theme.breakpoints.down('sm')]: {
    //   paddingLeft: 0,
    //   '& $container': {
    //     paddingRight: 15
    //   }
    // }
  },
  topBar: {
    [theme.breakpoints.up('sm')]: {
      borderTopLeftRadius: 30
    }
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    padding: '64px 0 0 0',
    '@media all and (-ms-high-contrast:none)': {
      height: 0 // IE11 fix
    }
  },
  content: {
    flexGrow: 1,
    maxWidth: '100%',
    overflowX: 'hidden',
  }
}));

const Dashboard = ({ route }) => {
  const classes = useStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);
  // const [setOpenNavBarMobile] = useState(false);

  return (
    <div className={classes.root}>
      <NavBar
        onMobileClose={() => setOpenNavBarMobile(false)}
        openMobile={openNavBarMobile}
      />
      <div className={classes.rightWrapper}>
        <TopBar onOpenNavBarMobile={() => setOpenNavBarMobile(true)} />
        <div className={classes.container}>
          <div className={classes.content}>
            <Suspense fallback={<LinearProgress />}>
              {renderRoutes(route.routes)}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  route: PropTypes.object
};

export default Dashboard;
