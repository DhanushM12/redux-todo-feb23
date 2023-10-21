import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { deleteTask } from '../actions';

class Todo extends Component {
  render() {
    return (
      <div>
        <td>{this.props.task}</td>
        <td><button onClick={() => this.props.deleteTask(this.props.id)}>Delete</button></td>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({deleteTask}, dispatch)
}

export default connect(()=> {}, mapDispatchToProps)(Todo);