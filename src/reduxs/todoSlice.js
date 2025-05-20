import { createSlice } from '@reduxjs/toolkit';

const loadTodos = () => {
  try {
    const serializedTodos = localStorage.getItem('todos');
    if (serializedTodos === null) {
      return [];
    }
    return JSON.parse(serializedTodos);
  } catch (err) {
    console.error('Error loading todos from localStorage:', err);
    return [];
  }
};

const initialState = {
  todos: loadTodos(),
  editingTodoId: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload.trim()) {
        state.todos.push({
          id: Date.now(),
          text: action.payload,
          completed: false,
        });
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
    startEditing: (state, action) => {
      state.editingTodoId = action.payload;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo && text.trim()) {
        todo.text = text;
        state.editingTodoId = null;
        localStorage.setItem('todos', JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, startEditing, updateTodo } = todoSlice.actions;
export default todoSlice.reducer; 