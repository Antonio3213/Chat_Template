import { Button } from "@/components/ui/button"
import { useAuthActions } from "@/hooks/use-Auth-Actions"
import { useAuth, useUser } from "reactfire"


const DashboardPage = () => {

  const auth = useAuth()
  const {data : user} = useUser()
  const {logout} = useAuthActions
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Welcome {user?.displayName || "Guest"}</p>
      <p>Email: {user?.email || "No email available"}</p>

      {/* Boton para cerrar sesión */}
      <Button onClick={logout}>Sign Out</Button>
    </div>
  )
}

export default DashboardPage
