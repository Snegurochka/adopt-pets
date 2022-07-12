import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    User,
    onAuthStateChanged,
    NextOrObserver,
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    query,
    getDocs,
    QueryDocumentSnapshot,
    where
} from 'firebase/firestore';

import { IComment, IUser } from '../interfaces/interfaces';

const firebaseConfig = {
    apiKey: "AIzaSyBYNcIfrAZJyxDtTX_Nwj9AdTlH3IKziI4",
    authDomain: "adopt-me-2-f799d.firebaseapp.com",
    projectId: "adopt-me-2-f799d",
    storageBucket: "adopt-me-2-f799d.appspot.com",
    messagingSenderId: "1033358948597",
    appId: "1:1033358948597:web:3bd8f682c9029191272dbc",
    measurementId: "G-VW8S1QPH5M"
};


initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account',
});

export const db = getFirestore();

// Auth section

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
export const signOutUser = async () => await signOut(auth);

export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInformation = {}
): Promise<void | QueryDocumentSnapshot<IUser>> => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        } catch (error) {
            console.log('error creating the user', error);
        }
    }

    return userSnapshot as QueryDocumentSnapshot<IUser>;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback);

export const getCollectionAndDocuments = async (collectionName: string) => {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot;
};

// Comments
export const getCommentsByPetFromAPI = async (petId: string): Promise<IComment[]> => {
    const collectionRef = collection(db, 'comments');
    const q = query(collectionRef, where('petId', '==', petId));

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => doc.data() as IComment);
};