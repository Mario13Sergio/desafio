import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { ResetStyled } from "./styles/reset.js"
import { theme } from './styles/theme'
import { RouterProvider } from 'react-router-dom'
import { routes } from "./routes"




ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <ResetStyled/>      
    <RouterProvider router={routes}/>    
  </ThemeProvider>
)
