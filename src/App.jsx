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
import AboutSection from './components/AboutSection'
import NumbersSection from './components/NumbersSection'
import HistorySection from './components/HistorySection'

// Custom hooks
import { useScrollToHash } from './hooks/useScrollToHash'

// ScrollToTop component to handle navigation
const ScrollToTop = () => {
  useScrollToHash();
  return null;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginForm />} />
            <Route path="/admin" element={
              <AdminRoute>
                <AdminPanel />
              </AdminRoute>
            } />
            
            {/* Public Site */}
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <div id="education">
                  <EducationSection />
                </div>
                <div id="about">
                  <AboutSection />
                </div>
                <div id="numbers">
                  <NumbersSection />
                </div>
                <div id="history">
                  <HistorySection />
                </div>
                <div id="action">
                  <ActionSection />
                </div>
                
                {/* Dynamic Content Section - Additional content managed via admin */}
                <section className="py-12 bg-white">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Additional Resources
                      </h2>
                      <p className="text-lg text-gray-600">
                        In-depth information and context for understanding the full picture
                      </p>
                    </div>
                    <ContentRenderer />
                  </div>
                </section>
                
                <div id="newsletter">
                  <Newsletter />
                </div>
                <Footer />
              </>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App