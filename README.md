# auth-node-jwt-mysql
Authentication using nodejs jwt mysql

## Getting started 
- `git clone https://github.com/andigaluh/auth-node-jwt-mysql`
- `npm install`
- Create database (mysql)
- Fill the config file in app/config *.config.js from *.config.js.template
- `npm start`
----------

## Endpoint:

### Sign Up
POST /api/auth/signup
Host: localhost:8080
Content-Type: application/json

Request :
{
    "username" : "admin",
    "email": "admin@domain.com",
    "password" : "password-is-here",
    "roles" : ["admin","user","moderator"]
}
