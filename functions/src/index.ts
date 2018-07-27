import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
    const jack = {
        name: 'dasdsadsa'
    }
    response.send(jack);
});

export const getUsers = functions.https.onRequest((request, response) => {
    admin.firestore().collection('users').get()
    .then(userRefs => {
        if(!userRefs.empty) {
            console.log('No such document!');
            // console.log(userRefs);
        } else {
            console.log(userRefs);
            response.send(userRefs);
        }
        // if (!snapshot.docs) {
        //     console.log('No such document!');
        // } else {
        //     console.log('Document data:', snapshot.data());
        //     const user = snapshot.data();
        //     response.send(user);
        // }
    }).catch(error => {
        console.log(error)
        response.status(500)
    })
});