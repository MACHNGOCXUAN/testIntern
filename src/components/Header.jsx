import React from 'react'
import { CiDark, CiLight, CiUser } from 'react-icons/ci'
import { FcTodoList } from 'react-icons/fc'
import { LuListTodo } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDarkMode } from '../reduxs/themeSlice'

function Header() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)
  const dispatch = useDispatch()

  const toggleTheme = () => {
    dispatch(toggleDarkMode())
  }
  return (
    <header className='h-20 w-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg'>
      <div className='w-[1300px] mx-auto px-4 h-full flex items-center justify-between'>
        <div className='flex items-center space-x-2'>
          <LuListTodo color='blue' size={25}/>
          <h1 className='text-2xl font-bold text-white'>Todo App</h1>
        </div>
        
        <div className='flex items-center space-x-4'>
        <button
            onClick={toggleTheme}
            className='p-2 rounded-full hover:bg-white/20 transition-colors'
          >
            {isDarkMode ? (
              <CiLight size={25} className="text-white" />
            ) : (
              <CiDark size={25} className="text-white" />
            )}
          </button>
          <div className='text-white dark:text-blue-500 text-sm'>
            <span className='font-medium'>Mạch Ngọc Xuân</span>
          </div>
          <div className='h-8 w-8 rounded-full bg-white/20 flex items-center justify-center'>
            <CiUser />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header