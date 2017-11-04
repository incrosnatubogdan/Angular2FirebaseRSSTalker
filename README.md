[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Greenkeeper badge](https://badges.greenkeeper.io/incrosnatubogdan/Angular2FirebaseRSSTalker.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/incrosnatubogdan/Angular2FirebaseRSSTalker.svg?branch=master)](https://travis-ci.org/incrosnatubogdan/Angular2FirebaseRSSTalker)

# Personal Assistant - An Angular2 Cloud based personal assistant

FireStarter is designed to handle the basic features required by most Angular Firebase apps. It can serve as a foundation to learn this stack and roll out more complex features.

## Features

- Angular 4.4 + AngularFire5
- 100 PWA Lighthouse Score
- Firebase Authentication w/ Router Guard
- Firestore Database CRUD Demo
- Realtime Database CRUD Demo
- File Uploads to Firebase Storage Demo


## Usage

Create an account at https://firebase.google.com/

- `git clone https://github.com/incrosnatubogdan/Angular2FirebaseRSSTalker.git`
- `cd Angular2FirebaseRSSTalker`
- `npm install`

Create the environment files below in `src/environments/`.

#### environment.ts
```typescript
export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'APIKEY',
        authDomain: 'DEV-APP.firebaseapp.com',
        databaseURL: 'https://DEV-APP.firebaseio.com',
        projectId: 'DEV-APP',
        storageBucket: 'DEV-APP.appspot.com',
        messagingSenderId: '123456789'
    }
};
```
#### environment.prod.ts
```typescript
export const environment = {
    production: true,
    firebaseConfig: {
        // same as above, or use a different firebase project to isolate environments
    }
};
```

And finally `ng serve`

