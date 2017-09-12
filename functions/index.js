const functions = require('firebase-functions');

require('@google-cloud/debug-agent').start();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.holaMundo = functions.https.onRequest((request, response) => {
    let mensaje = "jsjsjjs"
    response.send(mensaje + "Holaaa!");
 });
