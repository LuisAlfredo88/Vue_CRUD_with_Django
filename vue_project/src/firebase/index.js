// const firebase = require('firebase/app');
let firebase = null;
import api from '@/store/api'

const showNotification = (message) => {
    new Notification(
        'Control de Pago',
        {icon: 'https://deivisadames.com/payment/img/logo.abbbd621.png', 
            body: message,
            dir : "ltr",
            requireInteraction: true
        }
    );
}

const startFirebase = () => {
    // if(firebase) return;    
    
    // firebase = require('firebase/app');
    // require('firebase/messaging');

    // firebase.initializeApp({
    //     apiKey: "AIzaSyDAzLwQo-pZkX2E-8ASqbfmqSjfr-IIuz4",
    //     authDomain: "my-project-83717.firebaseapp.com",
    //     databaseURL: "https://my-project-83717.firebaseio.com",
    //     projectId: "my-project-83717",
    //     storageBucket: "my-project-83717.appspot.com",
    //     messagingSenderId: "392021395277",
    //     appId: "1:392021395277:web:a0b4e114035c0fd5509904"        
    // });

    // const messaging = firebase.messaging();

    // messaging.getToken().then((currentToken) => {
    //     console.log(currentToken);
    //     api.commons.setFirebaseToken(currentToken);
    // }).catch((err) => {});

    // messaging.onTokenRefresh(() => {
    //     messaging.getToken().then((refreshedToken) => {
    //         api.commons.setFirebaseToken(refreshedToken);
    //     }).catch((err) => {});
    // });

    // messaging.onMessage((message) => {
    //     console.log(message);
    //     showNotification(message);
    // });


    // navigator.serviceWorker.register('./static/firebase-messaging-sw.js')
    // .then((registration) => {
    //     firebase.messaging.useServiceWorker(registration)
    //     firebase.messaging.requestPermission().then(() => {
    //         firebase.messaging.getToken().then((token) => {
    //             console.log(token);
    //         }).catch((err) => console.log(err))
    //     }).catch(function (err) {
    //         console.log('Unable to get permission to notify.', err)
    //     })
    // }).catch(err => {
    //     console.log('error register', err)
    // })

    // const messaging = firebase.messaging();

    // messaging.getToken().then((currentToken) => {
    //     console.log(currentToken);
    //     api.commons.setFirebaseToken(currentToken);
    // }).catch((err) => {});

    // messaging.onTokenRefresh(() => {
    //     messaging.getToken().then((refreshedToken) => {
    //         api.commons.setFirebaseToken(refreshedToken);
    //     }).catch((err) => {});
    // });

    // messaging.onMessage((message) => {
    //     console.log(message);
    //     showNotification(message);
    // });



}

const startMessaging = () => {
    if (typeof Notification != 'undefined') {
        Notification.requestPermission().then(function(result) {
            startFirebase();
        });
    }    
}

export default {
    startMessaging
}
