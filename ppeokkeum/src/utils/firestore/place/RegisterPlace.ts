import { addDoc, collection } from "firebase/firestore";
import { FirebaseDB } from "../../../Firebase";

export async function RegisterUserPlace(
    location: string,
    latitude: number,
    longitude: number
) {
    try {
        await addDoc(collection(FirebaseDB, "smokingArea"), {
            address: "",
            location: location,
            latitude: latitude,
            longitude: longitude,
            isGovernmentData: false,
            comments: [],
            like: 0,
            dislike: 0,
        });
        return true;
    } catch (error) {
        return false;
    }
}
