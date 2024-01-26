import { doc, updateDoc } from "firebase/firestore";
import { FirebaseDB } from "../../../Firebase";
import { ISmokingArea } from "../../../projectCommon";

export async function RegisterEmotion(
    like: number,
    dislike: number,
    smokingArea: ISmokingArea
) {
    try {
        const ref = doc(FirebaseDB, "smokingArea", smokingArea.id);
        await updateDoc(ref, {
            like: like ? smokingArea.like + like : smokingArea.like,
            dislike: dislike
                ? smokingArea.dislike + dislike
                : smokingArea.dislike,
        });
        return true;
    } catch (error) {
        return false;
    }
}
