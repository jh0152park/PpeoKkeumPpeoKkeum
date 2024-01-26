import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "../../../Firebase";

export async function LoginWithGoogle() {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(FirebaseAuth, provider);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        const user = result.user;
        return true;
    } catch (error) {
        alert("구글 로그인 실패, 잠시후 다시 이용해주세요");
        return false;
    }
}
