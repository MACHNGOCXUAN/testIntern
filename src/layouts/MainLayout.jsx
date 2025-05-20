import React from 'react'
import Header from '../components/Header'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <Header />
      {children}
    </div>
  )
}

export default MainLayout