import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth"

import { app } from "./firebase-config"

const auth = getAuth(app)
const fbAuthProvider = new FacebookAuthProvider()

export const FacebookAuth = async() => {
    const fbAuth = signInWithPopup(auth, fbAuthProvider)
    return fbAuth
}