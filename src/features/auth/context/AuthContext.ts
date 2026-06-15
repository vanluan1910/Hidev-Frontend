import { createContext } from 'react'

export interface AuthUser {
  email: string
  name: string
  role: 'admin' | 'customer'
}

export interface AuthContextValue {
  user: AuthUser | null
  login: (user: AuthUser) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue | null>(null)
