
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PageProvider } from './context/PageContext';

createRoot(document.getElementById('root')!).render(
 <PageProvider>
    <App />
 </PageProvider>
  
)
