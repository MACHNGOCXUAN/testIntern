import React from 'react'
import MainLayout from '../layouts/MainLayout'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

function Home() {
  return (
    <MainLayout>
      <div className="bg-gray-100 dark:bg-gray-900 py-8 min-h-screen">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
            Quản lý công việc
          </h1>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <AddTodo />
            <TodoList />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Home