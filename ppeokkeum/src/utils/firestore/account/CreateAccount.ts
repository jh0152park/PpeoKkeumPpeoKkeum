import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
    CreateAllNicknameDB,
    CreateUserDB,
    IsExistNickname,
} from "./CreateUserDB";
import { FirebaseAuth } from "../../../Firebase";

export async function CreateAccount(
    email: string,
    password: string,
    name: string,
    nickname: string
) {
    try {
        const isAlreadyExistNickname = await IsExistNickname(nickname);

        if (isAlreadyExistNickname) {
            alert("이미 사용중인 닉네임 입니다.");
            return;
        }

        const credential = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );

        if (credential) {
            await updateProfile(credential.user, {
                displayName: nickname,
            });

            CreateAllNicknameDB(nickname);
            CreateUserDB(email, password, name, nickname, credential.user.uid);
            return true;
        }
    } catch (error) {
        return false;
    }
}
