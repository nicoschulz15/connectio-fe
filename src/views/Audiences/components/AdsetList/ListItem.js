import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  ListItem, ListItemText, IconButton, Box, Typography
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CancelIcon from '@material-ui/icons/Cancel';
import LockIcon from '@material-ui/icons/Lock';
import DeleteIcon from '@material-ui/icons/Delete';
import BarIcon from './BarIcon';

const useStyles = makeStyles(() => ({
  root: {
    background: (props) => (props.isEditing && !props.isLocked ? '#484A54' : '#FFFFFF'),
    boxShadow: '0px 1px 4px rgba(150, 117, 206, 0.13)',
    borderRadius: 3,
    marginBottom: 10,
    padding: '15px 15px 15px 5px'
  },
  moreButton: {
    padding: 0,
    color: (props) => (!props.isEditing ? '#7986CC' : props.isLocked ? '#CC79A1' : '#ffffff'),
    marginRight: 10
  },
  titleText: {
    color: (props) => (!props.isEditing ? '#000000' : props.isLocked ? '#CC79A1' : '#ffffff'),
  },
  valueText: {
    fontWeight: 'bold',
    color: '#7986CC',
    padding: '0 5px'
  },
  closeButton: {
    color: 'rgba(182, 185, 204, 0.46)',
    padding: 0
  },
  isDragging: {}
}));

const ListItemComponent = ({
  data, isEditing, snapshot, provided, ...rest
}) => {
  const classes = useStyles({ isEditing, isLocked: data.isLocked });

  const onClickMore = () => {
    console.log('click more');
  };

  const onClickClose = () => {
    console.log('click close');
  };

  return (
    <ListItem
      {...rest}
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={clsx(classes.root, {
        [classes.isDragging]: snapshot.isDragging
      })}
    >
      <IconButton className={classes.moreButton} onClick={onClickMore}>
        {
          !data.isLocked ? <MoreVertIcon /> : isEditing ? <DeleteIcon /> : <LockIcon />
        }
      </IconButton>
      <ListItemText
        classes={{ primary: classes.titleText }}
        primary={data.title}
      />
      <Box
        display="flex"
        alignItems="center"
        borderLeft="1px solid rgba(121, 134, 204, 0.06)"
        padding="5px 10px 5px 20px"
      >
        {
          !data.isLocked && !isEditing && <BarIcon />
        }
        { !isEditing
          && <Typography className={classes.valueText}>{data.value}</Typography>}
        <IconButton className={classes.closeButton} onClick={onClickClose}>
          <CancelIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

ListItemComponent.propTypes = {
  data: PropTypes.object,
  isEditing: PropTypes.bool,
  provided: PropTypes.object.isRequired,
  snapshot: PropTypes.object.isRequired
};

export default ListItemComponent;
