import React, { Component } from "react";
import { DragSource } from "react-dnd";
const itemSource = {
  beginDrag(props) {
    return props;
  },
  endDrag(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreviw: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
}

class UserStory extends Component {
  render() {
    const { isDragging, connectDragSource, item } = this.props;
    return connectDragSource(
      <div>
        <h3>{item}</h3>
      </div>
    );
  }
}

export default DragSource("item", itemSource, collect)(UserStory);
