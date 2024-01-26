import { doc, updateDoc } from "firebase/firestore";
import { ISmokingArea } from "../../../projectCommon";
import { FirebaseAuth, FirebaseDB } from "../../../Firebase";

export async function RegisterComment(
    comment: string,
    smokingArea: ISmokingArea
) {
    try {
        const ref = doc(FirebaseDB, "smokingArea", smokingArea.id);
        await updateDoc(ref, {
            comments: [
                ...smokingArea.comments,
                {
                    author: FirebaseAuth.currentUser?.displayName,
                    comment: comment,
                },
            ],
        });
        return true;
    } catch (error) {
        return false;
    }
}
