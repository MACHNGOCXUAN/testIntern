import Home from "./pages/Home"
import { useSelector } from "react-redux"

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <Home/>
      </div>
    </div>
  )
}

export default App