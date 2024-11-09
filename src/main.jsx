import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Users from './Users.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Users/>
    <Student name="samruddi"/> */}
    
  </StrictMode>,
)