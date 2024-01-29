import {
    GoogleAuthProvider,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "../../../Firebase";

export async function LoginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(FirebaseAuth, provider);

        const user = result.user;
        await updateProfile(user, {
            displayName: user.displayName,
        });
        return true;
    } catch (error) {
        alert("구글 로그인 실패, 잠시후 다시 이용해주세요");
        console.log(error);
        return false;
    }
}
