## About The Project

This project is a simple authentication backend build with Node.js, Express, Json Web Token and MySQL database. 

### Built With

This project built with
* [NodeJs](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Mysql](https://www.mysql.com/)

## Getting started 

Please follow all the steps below.

### Prerequisites

install the environment 
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a database named *authdb* in your mysql server
4. Enter your custom secret key in `app/config/auth.config.js.template` and save as `app/config/auth.config.js`
   ```sh
    secret: 'ENTER YOUR SECRET KEY',
   ```
5. Enter your mysql credential in `app/config/db.config.js.template` and save as `app/config/db.config.js`
   ```sh
    HOST: "localhost",
    USER: "your-user",
    PASSWORD: "your-password",
   ```
6. Enter your mail sender credential in `app/config/mail.config.js.template` and save as `app/config/mail.config.js`
   ```sh
    host: "smtp.domain.com",
    port: 465,
    user: "email@domain.com",
    pass: "your-password",
    bcc: "other-email@domain.com",
   ```
7. Start the project
   ```sh
    node server.js
   ```

### Endpoint

**Sign Up**
---
    returns json data about sign up a user

* **URL**

  /api/auth/signup

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
   None

* **Data Params**

  ```sh
    {
        "username" : "admin",
        "email": "admin@domain.com",
        "password" : "password-here",
        "roles" : ["admin", "moderator", "user"]
    }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{"message":"Your data is successfully submited! The activation link has been sent to your email."}`
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{"message":"Failed! username is already in use!"}`

  <!-- OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{"message":"Your data is successfully submited! The activation link has been sent to your email."}` -->

* **Sample Call:**

  ```sh
    curl --location --request POST 'http://localhost:8080/api/auth/signup' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "username" : "admin",
        "email": "admin@domain.com",
        "password" : "password-here",
        "roles" : ["admin","moderator","user"]
    }'
  ```
