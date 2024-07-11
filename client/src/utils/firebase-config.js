import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyCoZJRrEaqEJTmeVNU8NUL8ICchbHKJoKI",
    authDomain: "fb-login-27c3f.firebaseapp.com",
    projectId: "fb-login-27c3f",
    storageBucket: "fb-login-27c3f.appspot.com",
    messagingSenderId: "696686304489",
    appId: "1731793270981721",
}

export const app = initializeApp(firebaseConfig)
