import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HashRouter,Routes,Route} from 'react-router-dom'
import Form from './components/Form.jsx'
import Success from './pages/Success.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
