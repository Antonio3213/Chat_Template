// Importamos funciones necesarias desde Firebase Auth
import { 
    createUserWithEmailAndPassword, // Crea usuario con correo y contraseña
    updateProfile,                  // Actualiza datos del perfil del usuario (ej. nombre)
    signInWithEmailAndPassword,     // Inicia sesión con correo y contraseña
    type AuthError,                 // Tipo de error propio de Firebase para manejar errores
    signInWithPopup,                  // Permite iniciar sesión con un proveedor externo (Google, Facebook, etc.)
    signOut,
    GoogleAuthProvider
} from "firebase/auth";


// React hooks
import { useState } from "react";
// Hook de ReactFire para obtener la instancia de autenticación de Firebase
import { useAuth } from "reactfire";


// Definimos un tipo de respuesta común para todas las acciones de autenticación
// Esto ayuda a que siempre se devuelva un mismo formato (éxito o error)
interface AuthActionsResponse {
    success: boolean;        // Indica si la operación fue exitosa
    error: AuthError | null; // Si hubo error, aquí se guarda, de lo contrario null
}


// Creamos un hook personalizado para manejar la lógica de autenticación
export const useAuthActions = () => {

    // Estado para controlar si una operación está en proceso (loading)
    const [loading, setLoading] = useState(false);

    // Obtenemos la instancia de autenticación de Firebase
    const auth = useAuth();

    // ---------------------------
    // FUNCIÓN: Iniciar sesión con correo y contraseña
    // ---------------------------
    const login = async (data: {email: string, password: string}): Promise<AuthActionsResponse>  => {
        setLoading(true); // Activamos loading al iniciar la operación
        try {
            // Intentamos iniciar sesión con Firebase
            await signInWithEmailAndPassword(auth, data.email, data.password);

            // Si todo sale bien, devolvemos éxito sin error
            return {
                success: true,
                error: null
            };
        } catch (error) {
            // Si ocurre un error, lo casteamos a AuthError para manejarlo
            const authError = error as AuthError;
            return {
                success: false,
                error: authError,
            };
        } finally {
            // Siempre apagamos loading al finalizar la operación
            setLoading(false);
        }
    };

    
    // FUNCIÓN: Registrar un nuevo usuario con correo, contraseña y nombre

    const register = async (data: {email: string, password: string, displayName: string}): Promise<AuthActionsResponse> => {
        setLoading(true); // Activamos loading
        try {
            // Creamos al usuario con correo y contraseña
            const currentUser = await createUserWithEmailAndPassword(auth, data.email, data.password);

            // Si el usuario se creó correctamente, actualizamos su perfil con el displayName
            if(currentUser.user){
                await updateProfile(currentUser.user, {
                    displayName: data.displayName
                });
            }

            // Devolvemos éxito
            return {
                success: true,
                error: null
            };
        } catch(error) {
            // Capturamos el error y lo devolvemos
            const authError = error as AuthError;
            return {
                success: false,
                error: authError,
            };
        } finally {
            // Apagamos loading al terminar
            setLoading(false);
        }
    };

    // FUNCIÓN: Iniciar sesión con Google
    const loginWithGoogle = async (): Promise<AuthActionsResponse> => {
        setLoading(true); // Activamos loading
        try {
            // Creamos el proveedor de Google
            const provider = new GoogleAuthProvider();

            // Abrimos popup para iniciar sesión con Google
            await signInWithPopup(auth, provider);

            // Si funciona, devolvemos éxito
            return {
                success: true,
                error: null
            };
        } catch (error) {
            // Capturamos cualquier error
            console.error("Error en login con Google:", error);
            const authError = error as AuthError;
            return {
                success: false,
                error: authError,
            };
        } finally {
            // Apagamos loading al finalizar
            setLoading(false);
        }
    };

    const logout = async (): Promise<AuthActionsResponse> => {
        setLoading(true);
        try {
            await signOut(auth);

            return {
                success: true,
                error: null
            };
        } catch (error) {
            
            const authError = error as AuthError;
            return {
                success: false,
                error: authError,
            };
        } finally {
            setLoading(false);
        }
    };

    // Retornamos todas las funciones y el estado loading
    // Esto permite que en cualquier componente podamos usarlas fácilmente
    return {
        loading,
        login,
        register,
        loginWithGoogle,
        logout
    };
};
