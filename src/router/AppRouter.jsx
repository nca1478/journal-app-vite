import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/components'

export const AppRouter = () => {
  const status = useCheckAuth()

  if (status === 'checking') {
    // Animación de Loading
    return <CheckingAuth />
  }

  return (
    <Routes>
      {status === 'authenticated' ? (
        /* JournalApp */
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        /* Login y Registro */
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}

      {/* Otra Ruta */}
      <Route path="/*" element={<Navigate to={'/auth/login'} />} />
    </Routes>
  )
}
