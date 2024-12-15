import { useLocation, useRoutes } from 'react-router-dom'
import { Router } from './router/router'
import './App.css'
import { Suspense, useLayoutEffect } from 'react'
import { QueryClientProvider,QueryClient } from 'react-query'
import { ThemeProvider } from './context/themeProvider'
import { CoursesProvider } from './context/coursesProvider';

function App() {

  const allQueries = new QueryClient()
  const {pathname} = useLocation()
  
  useLayoutEffect(()=>{
     window.scrollTo(0,0)
     console.clear()
  },[pathname])

  
const router = useRoutes(Router)

  return (
    
   <ThemeProvider>
    

      <QueryClientProvider client={allQueries}>
        <CoursesProvider>
         <Suspense>
            <div className='dark:bg-gray-950'>
              {router}
            </div>
         </Suspense>
        </CoursesProvider>
      </QueryClientProvider>
    
   </ThemeProvider>
    
  )
}

export default App
