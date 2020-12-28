/* eslint-disable no-unused-vars */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Toolbar,
  Hidden,
  Divider,
  Typography,
  Grid
} from '@material-ui/core';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import { logout } from 'actions';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
    background: '#293347'
  },
  logoText: {
    color: '#ffffff',
    paddingLeft: 12,
    fontSize: 18
  },
  logoIcon: {
    color: '#ffffff',
    margin: '0 12px',
    fontSize: 30
  },
  flexGrow: {
    flexGrow: 1
  },
  iconButton: {
    marginRight: theme.spacing(1),
    color: '#ffffff'
  },
  userButton: {
    color: '#ffffff',
    marginLeft: 10
  },
  logoutIcon: {
    marginRight: theme.spacing(1)
  },
  dropDownButtonWrapper: {
    width: 'fit-content',
    paddingLeft: 20
  },
  dropDownButton: {
    color: '#ffffff',
    padding: '6px 15px',
    height: 64,
    borderRadius: 0,
    textTransform: 'capitalize'
  }
}));

const buttonList = [
  {
    label: 'Lists',
    href: '/lists'
  },
  {
    label: 'Audiences',
    href: '/audiences'
  },
  {
    label: 'Automate',
    href: '/automate'
  }
];

const TopBar = ({
  onOpenNavBarMobile,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    history.push('/auth/login');
    // dispatch(logout());
  };

  const onClickSchool = () => {
    console.log('click shcool');
  };

  const onClickReply = () => {
    console.log('click reply');
  };

  const onClickNotification = () => {
    console.log('click notification');
  };

  const onClickUser = () => {
    console.log('click user');
  };

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            onClick={onOpenNavBarMobile}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <RouterLink to="/">
          <Grid container alignItems="center">
            <PeopleOutlineIcon className={classes.logoIcon} />
            <Divider orientation="vertical" flexItem />
            <Typography className={classes.logoText}>connectio</Typography>
          </Grid>
        </RouterLink>
        <Hidden smDown>
          <Grid className={classes.dropDownButtonWrapper} container alignItems="center">
            {
              buttonList.map((item) => (
                <RouterLink key={item.label} to={item.href}>
                  <Button
                    className={classes.dropDownButton}
                    endIcon={<ArrowDropDownIcon />}
                    style={{ background: history.location.pathname === item.href ? '#9176C8' : 'transparent'}}
                  >
                    {item.label}
                  </Button>
                </RouterLink>
              ))
            }
          </Grid>
        </Hidden>
        <div className={classes.flexGrow} />
        <Hidden smDown>
          <IconButton className={classes.iconButton} color="inherit" onClick={onClickSchool}>
            <SchoolOutlinedIcon />
          </IconButton>
          <IconButton className={classes.iconButton} onClick={onClickReply}>
            <ReplyOutlinedIcon />
          </IconButton>
          <IconButton className={classes.iconButton} onClick={onClickNotification}>
            <Badge badgeContent={6} color="error" />
          </IconButton>
        </Hidden>
        <Button
          className={classes.userButton}
          endIcon={<ArrowDropDownIcon />}
          onClick={onClickUser}
        >
          Hallo Michael
        </Button>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
  onOpenNavBarMobile: PropTypes.func
};

export default TopBar;
