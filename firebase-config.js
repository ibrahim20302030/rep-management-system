// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmZ2qcig32wShzBtphnYi5Xl0LJm1p-4g",
  authDomain: "rep-management-system.firebaseapp.com",
  databaseURL: "https://rep-management-system-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rep-management-system",
  storageBucket: "rep-management-system.firebasestorage.app",
  messagingSenderId: "416275066968",
  appId: "1:416275066968:web:ba70ac29799f0434179a2d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Database references
const repsRef = db.ref('reps');
const ordersRef = db.ref('orders');
const loansRef = db.ref('loans');
const carsRef = db.ref('cars');
const bankEntriesRef = db.ref('bankEntries');
const repPasswordsRef = db.ref('repPasswords');

// Helper: Get data once
async function dbGet(ref) {
  const snapshot = await ref.once('value');
  return snapshot.val() || {};
}

// Helper: Set data
async function dbSet(ref, data) {
  await ref.set(data);
}

// Helper: Push new item
async function dbPush(ref, data) {
  const newRef = ref.push();
  await newRef.set(data);
  return newRef.key;
}

// Helper: Remove item
async function dbRemove(ref) {
  await ref.remove();
}
