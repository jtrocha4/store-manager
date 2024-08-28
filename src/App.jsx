import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemsPage from './pages/ItemsPage'
import UsersPage from './pages/UsersPage'

function App () {
  return (
    <Router>
      <Navbar />
      <section className=' my-4 py-4 px-2'>
        <Routes>
          <Route path='/items' element={<ItemsPage />} />
          <Route path='/users' element={<UsersPage />} />
        </Routes>
      </section>
    </Router>
  )
}

export default App
