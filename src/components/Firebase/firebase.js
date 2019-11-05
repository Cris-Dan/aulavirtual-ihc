import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: "AIzaSyBTG3wLBzjV4yG5Wd_p2K9PaOEiX05VY7o",
  authDomain: "aulavirtual-ihc.firebaseapp.com",
  databaseURL: "https://aulavirtual-ihc.firebaseio.com",
  projectId: "aulavirtual-ihc",
  storageBucket: "aulavirtual-ihc.appspot.com",
  messagingSenderId: "1057283553330",
  appId: "1:1057283553330:web:d19a83d1003e22070d642b",
  measurementId: "G-28MY12WDV1"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');

  //*** Curso API  ***

  curso = uid => this.db.ref(`cursos/${uid}`);

  cursos = () => this.db.ref('cursos');

  //*** Clase API ***

  clase = uid => this.db.ref(`clases/${uid}`);

  clases = () => this.db.ref('clases');



  //*** Archivo API ***

  archivo = uid => this.db.ref(`archivos/${uid}`);

  archivos = () => this.db.ref('archivos');

}


export default Firebase;
