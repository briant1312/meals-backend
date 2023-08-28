# Meals on Wheels server

## Current base url 
```
http://localhost:3001/
```

## User Authentication
You will need to set up a .env file in the root of this directory with the following variables
- DATABASE_URL
- SECRET
```
DATABASE_URL=mongodb://localhost/meals-on-wheels
SECRET=literallyanything
```

## Routes
All route endpoints should be prefixed with the base url shown above

### Sign-Up
- method: POST
- endpoint: users
- expects: user object in body of request
```
"username": "brian",
"password": "password"
```
- returns: jsonwebtoken

### Log-In
- method: POST
- endpoint: users/login
- expects: user object in the body of request
```
"username": "brian",
"password": "password"
```
- returns: jsonwebtoken
