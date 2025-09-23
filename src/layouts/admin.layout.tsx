import { Outlet, Navigate} from 'react-router'
import { useSigninCheck,  } from 'reactfire'

const AdminLayout = () => {

  const {status, data: signInCheckResult, hasEmitted} = useSigninCheck()

  //Si el usuario esta autenticado, mostrar el contenido del layout
  if (status === 'loading'|| !hasEmitted) {
    return <div>Loading...</div>
  }

  //Si el usuario no está autenticado, redirigir al login
  if (status === "success" && !signInCheckResult.signedIn) {
      return <Navigate to="/auth/login" replace />
  }
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default AdminLayout