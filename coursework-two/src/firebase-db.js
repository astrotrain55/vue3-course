import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDlZUhuBFAMiSiL8vDc-PXWzIfocq3uTEs',
  authDomain: 'vue3-course-825df.firebaseapp.com',
  databaseURL: 'https://vue3-course-825df-default-rtdb.firebaseio.com',
  projectId: 'vue3-course-825df',
  storageBucket: 'vue3-course-825df.appspot.com',
  messagingSenderId: '848761936007',
  appId: '1:848761936007:web:ede9c39e4a54db760dc022',
};

firebase.initializeApp(firebaseConfig);

export default {
  connect(fn) {
    const db = firebase.database().ref();

    db.on('value', (s) => {
      fn(s.val());
    });
  },
};
