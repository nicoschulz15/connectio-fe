import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Grid, Button, Typography
} from '@material-ui/core';

import AddsetIcon from 'utils/icons/svg/AddsetIcon';
import ShuffleIcon from 'utils/icons/svg/ShuffleIcon';
import UndoIcon from 'utils/icons/svg/UndoIcon';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 20
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: '25px',
    color: '#000000',
    padding: '0 20px'
  },
  headerButton: {
    background: '#fff',
    borderRadius: 3,
    boxShadow: '0px 4px 10px rgba(150, 117, 206, 0.1)',
    height: 34,
    padding: 10,
    color: '#7986CC',
    fontSize: 10,
    textTransform: 'capitalize',
    margin: '0 5px'
  }
}));

const Header = ({ onClickShuffleAudiences, onClickUndo }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container alignItems="center">
      <AddsetIcon />
      <Typography className={classes.headerTitle}>How many adsets to create?</Typography>
      <Grid item container alignItems="center" xs={12} sm={6}>
        <Button
          className={classes.headerButton}
          startIcon={<ShuffleIcon />}
          onClick={onClickShuffleAudiences}
        >
          Shuffle Audiences
        </Button>
        <Button className={classes.headerButton} startIcon={<UndoIcon />} onClick={onClickUndo}>
          Undo
        </Button>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  onClickShuffleAudiences: PropTypes.func,
  onClickUndo: PropTypes.func
};

export default Header;
