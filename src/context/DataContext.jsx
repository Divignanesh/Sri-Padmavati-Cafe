import { createContext, useContext, useEffect, useState } from 'react'

const DataContext = createContext(null)
const DATA_STORAGE_KEY = 'app-data'

export function DataProvider({ children }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(DATA_STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed && typeof parsed === 'object') {
          setData(parsed)
          return
        }
      }
    } catch (_) {}
    fetch('/data.json')
      .then((res) => (res.ok ? res.json() : null))
      .then((json) => setData(json || {}))
      .catch(() => setData({}))
  }, [])

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  )
}

export function useData() {
  const ctx = useContext(DataContext)
  return ctx?.data ?? {}
}

export function useSetData() {
  const ctx = useContext(DataContext)
  return ctx?.setData
}
