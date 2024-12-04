import { doc, getDoc } from 'firebase/firestore';
import { firestore } from './firebase'; // Import your Firebase config

// Function to fetch the 'url' field from a Firestore document
const fetchUrlFromFirestore = async (collectionName, documentName) => {
  try {
    // Reference to the document in Firestore
    const docRef = doc(firestore, collectionName, documentName);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // Get the 'url' field from the document data
      const data = docSnap.data();
      return data.url || null;
    } else {
      throw new Error("No such document!");
    }
  } catch (err) {
    console.error("Error fetching document:", err);
    throw err;
  }
};

export default fetchUrlFromFirestore;
