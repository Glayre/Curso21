import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Button from './components/Button.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button></Button>
    <Button></Button>
    <Button></Button>
  </StrictMode>,
);

