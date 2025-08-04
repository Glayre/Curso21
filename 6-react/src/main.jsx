import Button from "./src/components/Button.jsx"; 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Button></Button>
    <Button></Button>
    <Button></Button>
  </StrictMode>,
);

