import { Button } from "@/components/ui/button"
import { useAuthActions } from "@/hooks/use-Auth-Actions"
import {  useUser } from "reactfire"


const DashboardPage = () => {

  const {data : user} = useUser()
  const {logout} = useAuthActions ();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Page</h1>
      <p className="mb-2">Welcome {user?.displayName || "Guest"}</p>
      <p className="mb-4">Email: {user?.email || "No email available"}</p>

      {/* Boton para cerrar sesión */}
      <Button onClick={logout}>Sign Out</Button>
    </div>
  )
}

export default DashboardPage
