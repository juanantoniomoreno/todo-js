// Aquí importamos todas las clases del archivo index.js ( de classes )

import './styles.css';

import { Todo, TodoList } from './classes' // Si no especificamos el nombre busca el archivo index.js
import { crearTodoHtml }  from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );