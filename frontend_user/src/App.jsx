import { useState } from 'react'
import Navbar from './components/Navbar'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
function App() {
  

  return (
    
    

      <Router>
        <div className="h-dvh flex flex-col">
        <Navbar />
      <main className='flex-grow'>
        <Routes >
       
        <Route path="/login" element={<LoginPage />} />
     
        </Routes>
      </main>
      {/* <Footer /> */}
      <Footer />
      </div>
    </Router>

   
     
    
  )
}

export default App
