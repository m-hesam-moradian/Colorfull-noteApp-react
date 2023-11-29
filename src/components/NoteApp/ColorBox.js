import React, { Component } from 'react'

export default class ColorBox extends Component {
    render() {

        return (
          <div
            className="color-box"
            onClick={this.props.colorSelector.bind(this, this.props.color)}
            style={{ backgroundColor: this.props.color }}
          ></div>
        );
    }
}
