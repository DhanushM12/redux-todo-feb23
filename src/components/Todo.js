import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <td>{this.props.task}</td>
      </div>
    )
  }
}
