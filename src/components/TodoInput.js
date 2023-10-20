import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTask } from '../actions';
import { bindActionCreators } from 'redux';


class TodoInput extends Component {
  render() {
    return (
      <div>
        <input type='text' placeholder='Add a task' ref='task'/>
        <button onClick={() => this.props.addTask(this.refs.task.value)}>Add</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addTask}, dispatch)
}

export default connect(()=> {}, mapDispatchToProps)(TodoInput);