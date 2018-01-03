import React, { Component } from 'react';
import Counter from './Counter';
import TodoList from './TodoList';

export default class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <TodoList />
        <Counter />
      </div>
    )
  }
}
