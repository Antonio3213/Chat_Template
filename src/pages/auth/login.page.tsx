
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {Button} from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';


import CardFooterAuth from '@/components/card-footer-auth';
import { useAuthActions } from '@/hooks/use-Auth-Actions';

import{zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { loginZodSchema, type loginZodSchemaType } from "@/lib/zod.schema";



const LoginPage = () => {
  
const {loading, login} = useAuthActions();

const form = useForm<loginZodSchemaType>({
  resolver: zodResolver(loginZodSchema),
  defaultValues: {
    email: '',
    password: ''
  }
})

const onSubmit = async (data: loginZodSchemaType) => {
  const response = await login(data);
  console.log(data);
}

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-center'>Login</CardTitle>
        <CardDescription>login to your account</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="juanito@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={loading}>{loading ? 'Loading...' : 'Login'}</Button>
      </form>
    </Form>
      </CardContent>
      <CardFooterAuth type="login" loading={loading} />
    </Card>
  )
}

export default LoginPage