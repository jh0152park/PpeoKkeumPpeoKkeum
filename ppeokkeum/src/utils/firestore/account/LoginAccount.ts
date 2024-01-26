import { signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseAuth } from "../../../Firebase";

export async function LoginAccount(email: string, password: string) {
    try {
        const credential = await signInWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );

        if (credential) {
            return true;
        }
        return false;
    } catch (error: any) {
        alert(error.message);
        return false;
    }
}
