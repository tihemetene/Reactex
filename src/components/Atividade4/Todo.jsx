import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Atividade4 = () => {
  // estado do todo principal - será usado em TodoForm e TodoList
  const [todos, setTodos] = useState([]);

  // Corpo da Aplicação
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Atividade4;
