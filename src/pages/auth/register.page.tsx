import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useAuth } from 'reactfire'

const RegisterPage = () => {

  const auth = useAuth()

  const handleRegister = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

    } catch (error) {
      console.error("Error signing in:", error);
    }
  }
  return (
    <div>
      <h1>Register Page</h1>
      <button onClick={handleRegister}>Register</button>


    </div>
  )

}
export default RegisterPage