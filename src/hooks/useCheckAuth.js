import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth'
import { startLoadingNotes } from '../store/journal/thunks'

export const useCheckAuth = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.auth)

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout())

      const { uid, displayName, email, photoURL } = user

      // Recuperar el usuario que inicio sesión
      dispatch(login({ uid, displayName, email, photoURL }))

      // Cargar notas de Firebase
      dispatch(startLoadingNotes())
    })
  }, [])

  return status
}
