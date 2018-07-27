"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = functions.https.onRequest((request, response) => {
    const jack = {
        name: 'dasdsadsa'
    };
    response.send(jack);
});
exports.getUsers = functions.https.onRequest((request, response) => {
    admin.firestore().doc('users/jack').get()
        .then(snapshot => {
        if (!snapshot.exists) {
            console.log('No such document!');
        }
        else {
            console.log('Document data:', snapshot.data());
            const user = snapshot.data();
            response.send(user);
        }
    }).catch(error => {
        console.log(error);
        response.status(500);
    });
});
//# sourceMappingURL=index.js.map