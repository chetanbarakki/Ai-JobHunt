import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { SidebarProvider } from './contexts/SidebarContext';

// Pages
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Tracker from './pages/Tracker';
import ResumeTool from './pages/ResumeTool';
import ResumeEditor from './pages/ResumeEditor';
import JobSearch from './pages/JobSearch';
import JobOptimizer from './pages/JobOptimizer';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Support from './pages/Support';

export default function App() {
  return (
    <Router>
      <SidebarProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected Routes (Mocked) */}
          <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
          <Route path="/tracker" element={<Layout><Tracker /></Layout>} />
          <Route path="/resume-tool" element={<Layout><ResumeTool /></Layout>} />
          <Route path="/jobs" element={<Layout><JobSearch /></Layout>} />
          <Route path="/job-optimizer" element={<Layout><JobOptimizer /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/profile" element={<Layout><Profile /></Layout>} />
          <Route path="/support" element={<Layout><Support /></Layout>} />
          
          {/* Editor (Special Layout) */}
          <Route path="/resume-editor" element={<ResumeEditor />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </SidebarProvider>
    </Router>
  );
}
