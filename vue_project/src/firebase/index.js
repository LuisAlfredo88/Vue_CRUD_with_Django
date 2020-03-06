// const firebase = require('firebase/app');
let firebase = null;
import api from '@/store/api'

const showNotification = (message) => {
    new Notification(
        'App-name',
        {icon: 'icon-for-notification', 
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
    //     messagingSenderId: "mjs-id",
    //     appId: "app-key"        
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
