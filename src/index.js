import './styles.css';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

import { Todo, TodoList } from './classes';

import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHTML);

// const newTodo = new Todo('Aprender Javascript')

// todoList.todos[0].imprimirClase();

// console.log('todos', todoList.todos);