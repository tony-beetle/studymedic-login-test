// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw_pyo72GA4JabyZAX_2iwIlzGWfjW1Hk",
  authDomain: "studymedic-demo.firebaseapp.com",
  projectId: "studymedic-demo",
  storageBucket: "studymedic-demo.appspot.com",
  messagingSenderId: "600945290367",
  appId: "1:600945290367:web:7373b7cba1d0589c94a34a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
