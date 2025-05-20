import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, startEditing, updateTodo } from '../reduxs/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const editingTodoId = useSelector((state) => state.todos.editingTodoId);
  const dispatch = useDispatch();
  const [editText, setEditText] = useState('');

  const handleEdit = (todo) => {
    dispatch(startEditing(todo.id));
    setEditText(todo.text);
  };

  const handleSave = (id) => {
    dispatch(updateTodo({ id, text: editText }));
  };

  return (
    <div className="mt-8">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-4 mb-2 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
            {editingTodoId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                autoFocus
              />
            ) : (
              <span
                className={`flex-1 ${
                  todo.completed 
                    ? 'line-through text-gray-500 dark:text-gray-400' 
                    : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {todo.text}
              </span>
            )}
          </div>
          <div className="flex space-x-2">
            {editingTodoId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Lưu
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleEdit(todo)}
                  className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Sửa
                </button>
                <button
                  onClick={() => dispatch(deleteTodo(todo.id))}
                  className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Xóa
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;