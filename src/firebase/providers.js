import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";

export const registerUser= async ({email, password}) => {
  try {
    const resp= await createUserWithEmailAndPassword(FirebaseAuth, email, password)
    const {uid}=resp.user
    console.log(resp)
  } catch (error) {
        return {ok:false, errorMessage:"fallo"}
  }
  
}

export const signUser= async ({email, password}) => {
    try {
      const resp= await signInWithEmailAndPassword(FirebaseAuth, email, password)
      const {uid}=resp.user
      console.log(resp)
    } catch (error) {
          return {ok:false, errorMessage:"fallo"}
    }
    
  }