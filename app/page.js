'use client'

import { useAuth } from '../contexts/auth'
import { useRouter } from 'next/navigation';

export default function Page() {
  const { token } = useAuth()
  const router = useRouter()

  console.log(token)

  return router.replace(token !== null ? '/dashboard' : '/login')
}