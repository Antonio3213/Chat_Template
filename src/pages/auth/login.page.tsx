
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import CardFooterAuth from '@/components/card-footer-auth';
import { useAuthActions } from '@/hooks/use-Auth-Actions';



const LoginPage = () => {
  
const {loading} = useAuthActions();

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-center'>Login</CardTitle>
        <CardDescription>login to your account</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooterAuth type="login" loading={loading} />
    </Card>
  )
}

export default LoginPage