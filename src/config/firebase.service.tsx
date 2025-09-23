import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import React from 'react'
import { AuthProvider, FirestoreProvider, StorageProvider, useFirebaseApp } from 'reactfire';

interface Props {
 children: React.ReactNode;
}
function FirebaseService({ children }: Props) {

    const app = useFirebaseApp();

    //Hooks de Firebase (Autenticacion, Firestore, Storage)
    const auth = getAuth(app);
    const fireStorage = getFirestore(app);
    const storage  = getStorage(app);

  return (
    <AuthProvider sdk={auth}>
      <FirestoreProvider sdk={fireStorage}>
        <StorageProvider sdk={storage}>
           {children}
        </StorageProvider>
      </FirestoreProvider>
    </AuthProvider>
  )
}

export default FirebaseService