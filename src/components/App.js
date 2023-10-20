import React, { Component } from 'react'
import '../App.css'
import Header from './Header'
import TodoInput from './TodoInput'
import Todolist from './Todolist'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TodoInput />
        <Todolist />
      </div>
    )
  }
}

