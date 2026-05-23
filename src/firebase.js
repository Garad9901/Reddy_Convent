import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Read Firebase configuration from Vite environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Check if a valid project ID is configured to determine if Firebase is fully set up
const isConfigured = !!firebaseConfig.projectId && firebaseConfig.projectId !== "YOUR_PROJECT_ID";

let db = null;

if (isConfigured) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    console.log("🔥 Firebase initialized successfully!");
  } catch (error) {
    console.error("❌ Failed to initialize Firebase:", error);
  }
} else {
  console.log(
    "ℹ️ Firebase credentials not detected. Operating in mock mode (saving submissions securely to localStorage)."
  );
}

/**
 * Saves admission inquiry to Firestore (or local fallback)
 * @param {Object} data 
 * @returns {Promise<Object>} Status of the submission
 */
export async function saveAdmission(data) {
  const payload = {
    ...data,
    createdAt: new Date().toISOString()
  };

  if (db) {
    try {
      const colRef = collection(db, "admissions");
      const docRef = await addDoc(colRef, {
        ...payload,
        createdAt: serverTimestamp() // Use Firebase server timestamp when connected
      });
      return { success: true, id: docRef.id, isMock: false };
    } catch (error) {
      console.error("Firestore Save Error (Admissions):", error);
      throw error;
    }
  } else {
    // Mock save: save to local storage
    return new Promise((resolve) => {
      setTimeout(() => {
        const admissions = JSON.parse(localStorage.getItem("srr_admissions") || "[]");
        const id = "mock_" + Math.random().toString(36).substring(2, 9);
        admissions.push({ ...payload, id });
        localStorage.setItem("srr_admissions", JSON.stringify(admissions));
        console.log("💾 Mock Admission Inquiry saved to LocalStorage:", payload);
        resolve({ success: true, id, isMock: true });
      }, 500); // Mock network latency
    });
  }
}

/**
 * Saves contact form message to Firestore (or local fallback)
 * @param {Object} data 
 * @returns {Promise<Object>} Status of the submission
 */
export async function saveContact(data) {
  const payload = {
    ...data,
    createdAt: new Date().toISOString()
  };

  if (db) {
    try {
      const colRef = collection(db, "contacts");
      const docRef = await addDoc(colRef, {
        ...payload,
        createdAt: serverTimestamp()
      });
      return { success: true, id: docRef.id, isMock: false };
    } catch (error) {
      console.error("Firestore Save Error (Contacts):", error);
      throw error;
    }
  } else {
    // Mock save: save to local storage
    return new Promise((resolve) => {
      setTimeout(() => {
        const contacts = JSON.parse(localStorage.getItem("srr_contacts") || "[]");
        const id = "mock_" + Math.random().toString(36).substring(2, 9);
        contacts.push({ ...payload, id });
        localStorage.setItem("srr_contacts", JSON.stringify(contacts));
        console.log("💾 Mock Contact Message saved to LocalStorage:", payload);
        resolve({ success: true, id, isMock: true });
      }, 500); // Mock network latency
    });
  }
}
