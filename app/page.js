'use client'

import { useAuth } from '../contexts/auth'
import Dashboard from './dashboard/page'
import Login from './login/page'

export default function Page() {
  const { token } = useAuth()
  
  return token ? <Dashboard /> : <Login />
}