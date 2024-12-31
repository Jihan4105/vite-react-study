import { useState } from 'react';
import { useImmer } from 'use-immer';
import AddTodo from '../js/AddTodo.jsx';
import TaskList from '../js/TaskList.jsx';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useImmer(
    initialTodos
  );

  function handleAddTodo(title) {
    setTodos(draft => {
      draft.push({
        id: nextId++,
        title: title,
        done: false
      })
    })
  }

  function handleChangeTodo(nextTodo) {
    setTodos(draft => {
      const index = draft.findIndex(t =>
        t.id === nextTodo.id
      );  
      draft[index].title = nextTodo.title
      draft[index].done = nextTodo.done
    })
  }

  function handleDeleteTodo(todoId) {
    setTodos(draft => {
      const index = draft.findIndex(t =>
        t.id === todoId
      );
      draft.splice(index, 1);
    })
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
