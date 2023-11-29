import React, { Component } from "react";

export default class Note extends Component {
  render() {
    const { id, title, color } = this.props.obj;

    return (
      <div
        className="card shadow-sm rounded"
        style={{ backgroundColor: color }}
        onClick={() => this.props.touchDelete(id)}
      >
        <p className="card-text p-3">{title}</p>
      </div>
    );
  }
}
