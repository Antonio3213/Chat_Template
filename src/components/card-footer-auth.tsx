import React from 'react'
import { CardFooter } from './ui/card'
import { Button } from './ui/button'
import { useAuthActions } from '@/hooks/use-Auth-Actions';
import { toast } from 'sonner';
import {  Mail } from 'lucide-react';
import { Link } from 'react-router';


interface Props{
    type?: 'login' | 'register'
    loading?: boolean
}
const CardFooterAuth = ({ type, loading }: Props) => {
    const loginType = type === 'login';

    const { loginWithGoogle} = useAuthActions();

    const handleLoginWhithGoogle = async () => {
    const result = await loginWithGoogle();
    if (result.success) {
      console.log("Login with Google successful");
    } else {
      console.error("Login with Google failed:", result.error);
      toast.error("Login with Google failed: " + result.error?.message);
    }
  }
  return (
    
      <CardFooter className='flex flex-col items-center gap-4'>
          <Button onClick={handleLoginWhithGoogle}
              variant="outline"
              disabled={loading}><Mail />{loginType ? 'Login with Google' : 'Sign up with Google'}
          </Button>
          <p className="text-center text-sm text-muted-foreground">
              {loginType ? "Don't have an account?" : "Already have an account?"}
              <Link 
                  to={loginType ? "/auth/register" : "/auth/login"}
                  className="text-primary font-medium hover:underline ml-1"
              >
                  {loginType ? "Register" : "Login"}
              </Link>
          </p>

      </CardFooter>
  )
}

export default CardFooterAuth