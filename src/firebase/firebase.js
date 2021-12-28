import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/* 
//child_removed
database.ref('expenses').on('child_removed', snapshot => {
    console.log(snapshot.key, snapshot.val());
});

//child_changed
database.ref('expenses').on('child_changed', snapshot => {
    console.log(snapshot.key, snapshot.val());
});

//child_added
database.ref('expenses').on('child_added', snapshot => {
    console.log(snapshot.key, snapshot.val());
});
 */

/* database.ref('expenses')
    .on('value', snapshot => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        console.log(expenses);
    });

    setTimeout(() => {
        database.ref('expenses').push({
        description: 'food',
        note: '',
        amount: 1234,
        createdAt: 0
    });
    }, 3500); */

/* database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];

        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });

        console.log(expenses);
    }); */

/* database.ref('expenses').push({
    description: 'rent',
    note: '',
    amount: 123456,
    createdAt: 0
});

database.ref('expenses').push({
    description: 'power',
    note: '',
    amount: 12345,
    createdAt: 0
});

database.ref('expenses').push({
    description: 'water',
    note: '',
    amount: 54321,
    createdAt: 0
}); */

/* database.ref('notes/-MqvpF1niGlv2xbtqi1-').remove(); */

/* database.ref('notes').push({
    title: 'course topics',
    body: 'react native, angular, python'
}); */

/* const firebaseNotes = {
    notes: {
        apoijasfd: {
            title: 'first note',
            body: 'this is first note'
        },
        alskjdflajsdf: {
            title: 'second note',
            body: 'this is second note'
        }
  }  
};

const notes = [{
    id: '12',
    title: 'first note',
    body: 'this is my note'
}, {
    id: '761ase',
    title: 'another note',
    body: 'this is another note'
    }];

database.ref('notes').set(notes); */

/* database.ref().on("value", (snapshot) => {
    const val = snapshot.val();
    console.log(
        `${val.name} is a ${val.job.title} at ${val.job.company}!`
    );
}, (error) => {
    console.log('error with data fetching: ', error);
});
    
setTimeout(() => {
    database.ref('job/title').set('junior developer');
}, 3500); */

/* const onValueChange = database.ref().on("value", (snapshot) => {
    console.log(snapshot.val());
}, (error) => {
    console.log('error with data fetching: ', error);
});
    
setTimeout(() => {
    database.ref('age').set(42);
}, 3500);

setTimeout(() => {
    database.ref().off("value",onValueChange);
}, 7000);

setTimeout(() => {
    database.ref('age').set(39);
}, 10500); */

/* database.ref('location/city')
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    })
    .catch((error) => {
        console.log('error fetching data', error);
    }); */
    
/* database.ref().set({
    name: 'b g',
    age: 39,
    stressLevel: 6,
    job: {
        title: 'peon',
        company: 'hvac*+'
    },
    location: {
        city: 'wilmington',
        country: 'united states'
    }
}).then(() => {
    console.log('data is saved');
}).catch((error) => {
    console.log('this failed.', error);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'amazon',
    'location/city': 'seattle'
}).then(() => {
    console.log('database updated');
}).catch((error) => {
    console.log('could not update databaes: ', error);
}); */

/* //database.ref().set('this is my data');

// database.ref('age').set(40);
// database.ref('location/city').set('seattle'); */

/* database.ref('attributes').set({
    height: 69,
    weight: 242
}).then(() => {
    console.log('added/updated attributes to database');
}).catch((error) => {
    console.log('error adding/updating attributes', error);
});
 */

/* database.ref('isSingle')
    .remove()
    .then(() => {
        console.log('isSingle has been removed');
    })
    .catch((error) => {
        console.log('did not remove isSingle: ', error);
    }); */