import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useLocation, matchPath } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListSubheader,
  Drawer,
  Hidden
} from '@material-ui/core';

import NavItem from 'components/NavItem';
import navConfig from './navConfig';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',

  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);',
  },
  mobileDrawer: {
    backgroundImage: 'url("/images/navbar-bg.png")',
    width: drawerWidth,
  },
  drawerOpen: {
    width: 0,
    background: 'transparent',
    borderRight: 'unset',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    background: 'transparent',
    borderRight: 'unset',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 0,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(15),
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    marginTop: 75,
    ...theme.mixins.toolbar,
  },
  navigation: {
    overflow: 'hidden',
    flexGrow: 1
  }
}));

const renderNavItems = ({
  // eslint-disable-next-line react/prop-types
  items, subheader, key, ...rest
}) => (
  <List key={key}>
    {subheader && <ListSubheader disableSticky>{subheader}</ListSubheader>}
    {/* eslint-disable-next-line react/prop-types */}
    {items.reduce(
      // eslint-disable-next-line no-use-before-define
      (acc, item) => reduceChildRoutes({
        acc, item, ...rest
      }),
      []
    )}
  </List>
);

const reduceChildRoutes = ({
  acc, pathname, item, depth = 0
}) => {
  if (item.items) {
    const open = matchPath(pathname, {
      path: item.href,
      exact: false
    });
    acc.push(
      <NavItem
        depth={depth}
        icon={item.icon}
        key={item.href}
        label={item.label}
        open={Boolean(open)}
        title={item.title}
      >
        {renderNavItems({
          depth: depth + 1,
          pathname,
          items: item.items
        })}
      </NavItem>
    );
  } else {
    acc.push(
      <NavItem
        depth={depth}
        href={item.href}
        icon={item.icon}
        key={item.href}
        label={item.label}
        title={item.title}
      />
    );
  }

  return acc;
};

const NavBar = ({
  openMobile,
  onMobileClose,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const location = useLocation();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerClose = () => {
  //   setOpen(!open);
  // };
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }

    // eslint-disable-next-line
  }, [location.pathname]);

  const content = (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <nav className={classes.navigation}>
        {navConfig.map((list) => renderNavItems({
          items: list.items,
          subheader: list.subheader,
          pathname: location.pathname,
          key: list.subheader
        }))}
      </nav>
    </div>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{
            paper: classes.mobileDrawer
          }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      {/* <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} style={{ justifyContent: open ? 'flex-end' : 'center' }}>
          <IconButton onClick={handleDrawerClose}>
            {
              open
                && <ChevronLeftIcon style={{ fontSize: 30 }} />
            }
            {
              !open
                && <MenuIcon style={{ fontSize: 30 }} />
            }
          </IconButton>
        </div>
        {content}
      </Drawer> */}
    </>
  );
};

NavBar.propTypes = {
  openMobile: PropTypes.func,
  onMobileClose: PropTypes.func,
  className: PropTypes.object,
};

export default NavBar;
