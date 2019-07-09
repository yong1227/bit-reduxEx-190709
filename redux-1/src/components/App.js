import React from 'react';
import '../assets/css/App.css';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import TodoInput from '../containers/TodoInput'
import ControllerButtons from '../containers/ControllerButtons'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () =>(
    <div className="App">
      
      <TodoInput/>
      <TodoList/>
      <ControllerButtons/>
      <VisibleTodoList/>
      
    </div>
  );

export default App;
