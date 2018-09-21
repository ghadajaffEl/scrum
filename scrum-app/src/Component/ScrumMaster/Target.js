import React, { Component } from "react";
import { DropTarget } from "react-dnd";
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    item: monitor.getItem()
  };
}

class Target extends Component {
  render() {
    const { connectDropTarget, hovered, item } = this.props;
    const backgroundColor = hovered ? "blue" : "white";
    return connectDropTarget(
      <div
        className="target"
        style={{
          border: "1px solid black",
          height: "200px",
          backgroundColor: backgroundColor
        }}
      >
        Target:
      </div>
    );
  }
}
export default DropTarget("item", {}, collect)(Target);
