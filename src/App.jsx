import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import AdminRoute from './components/cms/AdminRoute'
import LoginForm from './components/cms/LoginForm'
import AdminPanel from './components/cms/AdminPanel'

// Main site components
import Header from './components/Header'
import Hero from './components/Hero'
import EducationSection from './components/EducationSection'
import ActionSection from './components/ActionSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ContentRenderer from './components/ContentRenderer'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginForm />} />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <AdminPanel />
                </AdminRoute>
              }
            />
            
            {/* Public Site */}
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Hero />
                  <EducationSection />
                  <ActionSection />
                  <ContentRenderer />
                  <Newsletter />
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App