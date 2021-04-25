import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDN50J9EJmCRw_Yb79JJCCEFgVbl9A756g',
  authDomain: 'chat-web-app-7cce4.firebaseapp.com',
  databaseURL: 'https://chat-web-app-7cce4-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-7cce4',
  storageBucket: 'chat-web-app-7cce4.appspot.com',
  messagingSenderId: '629345830660',
  appId: '1:629345830660:web:61c9899af97f5711237251',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
