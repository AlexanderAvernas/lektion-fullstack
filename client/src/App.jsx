import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import Update from './pages/Update'
import Books from './pages/books'


function App() {


  return (
  <div className="app">
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
