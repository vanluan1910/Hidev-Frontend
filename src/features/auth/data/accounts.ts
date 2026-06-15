export interface MockAccount {
  email: string
  password: string
  name: string
  role: 'admin' | 'customer'
}

/**
 * Built-in demo accounts for the storefront login (no backend yet).
 * Replace with a real API call when authentication is available.
 */
export const mockAccounts: MockAccount[] = [
  { email: 'admin@aura.com', password: 'aura123', name: 'Quản trị viên', role: 'admin' },
  { email: 'khachhang@aura.com', password: 'khach123', name: 'Khách hàng', role: 'customer' },
]

const STORAGE_KEY = 'aura-accounts'

function loadRegistered(): MockAccount[] {
  if (typeof window === 'undefined') return []
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (!stored) return []
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? (parsed as MockAccount[]) : []
  } catch {
    return []
  }
}

function saveRegistered(accounts: MockAccount[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(accounts))
  } catch {
    // Ignore storage errors.
  }
}

/** All accounts: built-in demo + accounts created via registration. */
export function getAllAccounts(): MockAccount[] {
  return [...mockAccounts, ...loadRegistered()]
}

export function emailExists(email: string): boolean {
  const normalized = email.trim().toLowerCase()
  return getAllAccounts().some((account) => account.email === normalized)
}

export function authenticate(email: string, password: string): MockAccount | null {
  const normalized = email.trim().toLowerCase()
  return (
    getAllAccounts().find((account) => account.email === normalized && account.password === password) ?? null
  )
}

/** Registers a new account, persisting it to localStorage. */
export function registerAccount(name: string, email: string, password: string): MockAccount {
  const account: MockAccount = { name: name.trim(), email: email.trim().toLowerCase(), password, role: 'customer' }
  const registered = loadRegistered()
  saveRegistered([...registered, account])
  return account
}
