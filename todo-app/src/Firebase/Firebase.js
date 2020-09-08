const firebaseConfig = {
	apiKey: "AIzaSyC5Q1QwCZsjGKOI5TMRY6x-O3MHxowirY0",
	authDomain: "todo-application-b6d50.firebaseapp.com",
	databaseURL: "https://todo-application-b6d50.firebaseio.com",
	projectId: "todo-application-b6d50",
	storageBucket: "todo-application-b6d50.appspot.com",
	messagingSenderId: "210155319619",
	appId: "1:210155319619:web:77cf8fb28436414ca5bff6",
	measurementId: "G-WLJ2BBN262"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
