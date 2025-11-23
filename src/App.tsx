import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Dashboard from './pages/Dashboard'
import KPI from './pages/KPI'
import Cashflow from './pages/Cashflow'
import Results from './pages/Results'
import Balance from './pages/Balance'
import Financing from './pages/Financing'
import Comparison from './pages/Comparison'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kpi" element={<KPI />} />
        <Route path="/cashflow" element={<Cashflow />} />
        <Route path="/results" element={<Results />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/comparison" element={<Comparison />} />
      </Routes>
    </Layout>
  )
}

export default App
