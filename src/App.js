import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddToDo';
import VisibleTodoList from './containers/VisibleToDoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;