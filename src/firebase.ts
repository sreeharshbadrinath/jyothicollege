import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Collection Reference
export const inquiriesCollection = collection(db, 'inquiries');

export interface InquiryData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
  timestamp: string;
  createdAt: any;
}
