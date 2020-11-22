# vue-express-es6-boilerplate

Easy setup Vue - Express boilerplate with barebone functionality

Setup script will be installing the dependencies for both frontend and the backend

Backend is configured to work with ES6
Frontend uses Vuetify for UI

## Usage

configure your environment variables within .env in backend
like this

```
DB_HOST=localhost
DB_USER=
DB_PASS=
NODE_ENV=development
PORT=5000
```

then;

```
npm install
npm run setup
npm run dev
```

```
# Run frontend (:8080) & backend (:5000) at the same time with concurrently
npm run dev
```

try localhost:8080 for frontend and localhost:5000/books for examples

![alt text](https://github.com/grknylmz/vue-express-es6-boilerplate/blob/main/screenshot.png?raw=true)
