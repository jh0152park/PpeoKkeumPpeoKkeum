import { addDoc, collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../../../Firebase";

export async function IsExistNickname(nickname: string) {
    try {
        const querySnapshot = await getDocs(
            collection(FirebaseDB, "nicknames")
        );
        querySnapshot.forEach((doc) => {
            if (doc.data()["nickname"] === nickname) {
                throw new Error(`${nickname} already exists`);
            }
        });
        return false;
    } catch (error) {
        return true;
    }
}

export async function CreateAllNicknameDB(nickname: string) {
    await addDoc(collection(FirebaseDB, "nicknames"), {
        nickname: nickname,
    });
}

export async function CreateUserDB(
    email: string,
    password: string,
    name: string,
    nickname: string,
    uid: string
) {
    await addDoc(collection(FirebaseDB, uid), {
        email: email,
        password: password,
        name: name,
        nickname: nickname,
        uid: uid,
        createdAt: Date.now(),
        comments: [],
        locations: [],
    });
}
