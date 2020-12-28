import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card, CardHeader, CardContent, Button, List, Grid
} from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PerfectScrollbar from 'react-perfect-scrollbar';

const useStyles = makeStyles(() => ({
  root: {
    padding: 12,
    boxShadow: '0px 4px 10px rgba(150, 117, 206, 0.1)',
    borderRadius: 5
  },
  cardHeaderRoot: {
    padding: 0
  },
  cardHeaderAction: {
    margin: 0
  },
  cardHeaderTitle: {
    fontWeight: 600,
    lineHeight: '16px',
    color: '#7986CC'
  },
  moreButton: {
    background: '#84889D',
    borderRadius: 20,
    width: 50,
    height: 20,
    color: '#ffffff',
    textTransform: 'capitalize',
    '&:hover': {
      background: 'rgba(132, 136, 157, 0.5)'
    }
  },
  moreIcon: {
    color: '#ffffff'
  },
  cardContent: {
    padding: '12px 0 0 0 !important'
  },
  isDraggingOver: {},
  content: {
    flexGrow: 1,
    overflowY: 'hidden'
  }
}));

const ListComponent = ({
  data, children, handleClickAction, provided, snapshot
}) => {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);

  const onClickAction = () => {
    handleClickAction(data.id, !isEdit);
    setIsEdit(!isEdit);
  };

  return (
    <Grid
      item
      lg={3}
      md={4}
      sm={6}
      xs={12}
      ref={provided.innerRef}
    >
      <Card className={classes.root}>
        <CardHeader
          classes={{
            root: classes.cardHeaderRoot,
            action: classes.cardHeaderAction,
            title: classes.cardHeaderTitle
          }}
          action={(
            <Button className={classes.moreButton} onClick={onClickAction}>
              {
                isEdit ? 'Cancel' : <MoreHorizIcon className={classes.moreIcon} />
              }
            </Button>
          )}
          title={isEdit ? 'Choose adset for transer' : data.title}
        />
        <CardContent className={classes.cardContent}>
          <List
            className={clsx(classes.content, {
              [classes.isDraggingOver]: snapshot.isDraggingOver
            })}
          >
            <PerfectScrollbar options={{ suppressScrollX: true }}>
              {children}
            </PerfectScrollbar>
          </List>
        </CardContent>
      </Card>
    </Grid>
  );
};

ListComponent.propTypes = {
  data: PropTypes.object,
  children: PropTypes.node,
  handleClickAction: PropTypes.func,
  provided: PropTypes.object.isRequired,
  snapshot: PropTypes.object.isRequired,
};

export default ListComponent;
