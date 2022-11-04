

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "./config";




export const registerUser = async ({ email, password }) => {
  try {
    const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid } = resp.user;

  } catch (error) {
    return { ok: false, errorMessage: "fallo" };
  }

};

export const signUser = async ({ email, password }) => {

  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { uid } = resp.user;

    return {
      ok: true,
      email: resp.user.email
    };



  } catch (error) {
    return { ok: false, errorMessage: error.message };
  }

};