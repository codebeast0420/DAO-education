import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function StartFirebase(){
  const firebaseConfig = {
		apiKey: "AIzaSyCwy2quyKQuHFnZWEv1Tm9C_mlemt8nKXs",
		authDomain: "fir-react-bc06e.firebaseapp.com",
		databaseURL: "https://fir-react-bc06e-default-rtdb.firebaseio.com",
		projectId: "fir-react-bc06e",
		storageBucket: "fir-react-bc06e.appspot.com",
		messagingSenderId: "234551418632",
		appId: "1:234551418632:web:fb4a28e694eb444ad056bd"
	};
	
	// Initialize Firebase
	const app = initializeApp(firebaseConfig);

	return getDatabase(app);
}

export default StartFirebase;