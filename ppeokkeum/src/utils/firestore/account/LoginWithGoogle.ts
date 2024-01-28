import {
    GoogleAuthProvider,
    getRedirectResult,
    signInWithPopup,
    signInWithRedirect,
    updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "../../../Firebase";
import { NavigateFunction } from "react-router-dom";

export async function LoginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        // const result = await signInWithPopup(FirebaseAuth, provider);

        // const user = result.user;
        // await updateProfile(user, {
        //     displayName: user.displayName,
        // });
        // return true;

        await signInWithRedirect(FirebaseAuth, provider);
        // getRedirectResult(FirebaseAuth).then((result) => {
        //     console.log("get redirect result");
        //     if (result) {
        //         updateProfile(result.user, {
        //             displayName: result.user.displayName,
        //         });
        //         return true;
        //     } else {
        //         return false;
        //     }
        // });
    } catch (error) {
        alert("구글 로그인 실패, 잠시후 다시 이용해주세요");
        console.log(error);
        return false;
    }
}
