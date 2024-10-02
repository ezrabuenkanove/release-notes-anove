import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReleaseNotes from './pages/ReleaseNotes'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ReleaseNotes />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
