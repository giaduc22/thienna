/* 
    firebase realtime database ref
*/

import firebase from 'react-native-firebase';

const databaseRef = firebase.database().ref();
export const librariesRef = databaseRef.child('libraries');
export const questionsRef = databaseRef.child('questions');
export const usersRef = databaseRef.child('users');
export const storageRef = firebase.storage().ref('library-audio');