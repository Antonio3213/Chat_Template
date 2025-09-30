import React from 'react'
import { useAuthActions } from '../../hooks/use-Auth-Actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import{ toast } from "sonner"



const LoginPage = () => {

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
    <Card>
      <CardHeader>
        <CardTitle className='text-center'>Login</CardTitle>
        <CardDescription>login to your account</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleLoginWhithGoogle} variant="outline">Login with Google</Button>
      </CardFooter>
    </Card>
  )
}

export default LoginPage