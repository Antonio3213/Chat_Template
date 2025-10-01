import { Card,  CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthActions } from '@/hooks/use-Auth-Actions';
import CardFooterAuth from '@/components/card-footer-auth';

const RegisterPage = () => {

 const {loading} = useAuthActions();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-center'>Register</CardTitle>
        <CardDescription>create a new account</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooterAuth type="register" loading={loading} />
    </Card>
  )
}

export default RegisterPage