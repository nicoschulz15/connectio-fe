import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { makeStyles } from '@material-ui/styles';
import {
  Grid, Box
} from '@material-ui/core';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import List from './List';
import ListItem from './ListItem';

const useStyles = makeStyles(() => ({
  root: {
    padding: '40px 0'
  }
}));

const AdsetList = ({ data }) => {
  const classes = useStyles();
  const [lists, setLists] = useState(data);
  const [listEditingState, setListEditingState] = useState(new Array(data.length).fill(false));

  useEffect(() => {
    setLists(data);
  }, [data]);

  const handleClickListAction = (id, isEdit) => {
    const index = data.findIndex((item) => item.id === id);
    setListEditingState((prevState) => (
      prevState.map((stateItem, itemIndex) => itemIndex === index && isEdit)
    ));
  };

  const handleDragEnd = (event) => {
    const { source, destination } = event;

    if (!destination) {
      return;
    }

    const newLists = _.clone(lists);
    const sourceList = newLists.find((list) => list.id === source.droppableId);
    const destinationList = newLists.find(
      (list) => list.id === destination.droppableId
    );
    const [removedItem] = sourceList.items.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceList.items.splice(destination.index, 0, removedItem);
      setLists(newLists);
    } else {
      removedItem.list = destination.droppableId;
      destinationList.items.splice(destination.index, 0, removedItem);
      setLists(newLists);
    }
  };

  return (
    <Box className={classes.root}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Grid container spacing={4}>
          {
            lists.map((item, listIndex) => (
              <Droppable
                droppableId={item.id}
                key={item.id}
              >
                {(provided, snapshot) => (
                  <List
                    key={item.id}
                    data={item}
                    provided={provided}
                    snapshot={snapshot}
                    handleClickAction={handleClickListAction}
                  >
                    {
                    item.items.map((adsetItem, index) => (
                      <Draggable
                        draggableId={adsetItem.id}
                        index={index}
                        key={adsetItem.id}
                      >
                        {(dragProvided, dragSnapshot) => (
                          <ListItem
                            isEditing={listEditingState[listIndex]}
                            data={adsetItem}
                            provided={dragProvided}
                            snapshot={dragSnapshot}
                          />
                        )}
                      </Draggable>
                    ))
                  }
                  </List>
                )}
              </Droppable>
            ))
          }
        </Grid>
      </DragDropContext>
    </Box>
  );
};

AdsetList.propTypes = {
  data: PropTypes.array
};

export default AdsetList;
