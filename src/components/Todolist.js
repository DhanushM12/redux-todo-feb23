import React, { Component } from 'react'
import Todo from './Todo';
import { connect } from 'react-redux';

class Todolist extends Component {
  render() {
    return (
      <div>
        <table>
            <tr>
                <th>
                    Tasks
                </th>
                <th>
                    Actions
                </th>
            </tr>
            <tr>
                {
                    this.props.tasks.map((task, index) => {
                        return <Todo key={index} task={task} id={index} />
                    })
                }
            </tr>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(Todolist);