
import { initializeApp,auth } from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'
import { getFirestore ,collection} from "firebase/firestore/lite"
const firebaseConfig = {

  apiKey: "AIzaSyBpTaABMmyGPGLgE8yQbkD_dGDZ4pbWDy8",

  authDomain: "whatsappclone-4f9c9.firebaseapp.com",

  projectId: "whatsappclone-4f9c9",

  storageBucket: "whatsappclone-4f9c9.appspot.com",

  messagingSenderId: "728740075239",

  appId: "1:728740075239:web:87542ff5af0c2a5d837442",

  measurementId: "G-D7713PDM73"

};
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const Auth =auth()
const provider = new Auth.GoogleAuthProvider();
export { Auth, provider };
export default db