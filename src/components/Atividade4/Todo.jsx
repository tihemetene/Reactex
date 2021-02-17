import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Atividade4 = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Atividade4;
