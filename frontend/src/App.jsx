import React from 'react'
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Register from './components/Register'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashboard'
import PageNoteFound from './components/PageNoteFound'
import AddNote from './components/AddNote'

import ProtectedRoute from './components/ProtectedRoute'
import EditNote from './components/EditNote'

function App() {
  return (
    <Router>
       <Toaster position='top-right'/>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<LandingPage/>}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={
              <ProtectedRoute>
              <Dashboard />
              </ProtectedRoute> }/>
        <Route path="*" element={<PageNoteFound/>} />
         {/* <Route path="/addNote" element={<AddNote />} />
        <Route path="/editNote/:id" element={<EditNote/>} /> */}
        <Route path="/addNote" element={ <ProtectedRoute><AddNote /> </ProtectedRoute>} />    
<Route path="/editNotes/:id" element={ <ProtectedRoute><EditNote /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App