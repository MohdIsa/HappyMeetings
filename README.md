![Landing](https://user-images.githubusercontent.com/44192857/69822213-cd91ce80-122b-11ea-8e43-fdd2fa1f82ed.png)
# HappyMeetings
An entry management web app which uses Nodemailer as an API which sends email to the host as well as the visitor providing them with useful information about their counterpart.
It also sends a sms to the Host which contains information about the visitor who has just arrived.

## Demo
Here is a working live demo : https://mihappymeetings.herokuapp.com/

## Landing Page
![Landing](https://user-images.githubusercontent.com/44192857/69822213-cd91ce80-122b-11ea-8e43-fdd2fa1f82ed.png)

## Query Filled Form
![MeetingDetails](https://user-images.githubusercontent.com/44192857/69822728-18601600-122d-11ea-810e-d9ad669c6dd9.png)

## Waiting Area
Once the Visitor enters the necessary information he/she is directed to the waiting area where a clock shows the time. Details of the visitor are emailed to the Host while he/she waits. The user can checkout at anytime he/she wants then the details of the meeting will be emailed to the Visitor.
![waiting](https://user-images.githubusercontent.com/44192857/69898558-1018ef80-1381-11ea-9e3b-646ecc58ea9e.png)

## Details of Meeting

### Example of a Meeting
Dummy Email of 'mohdravil001@gmail.com' has been used to send all the emails.

![Messg](https://user-images.githubusercontent.com/44192857/69823774-e3a18e00-122f-11ea-86a0-39dbd3ae0529.png)

### Information send to Host
Contains information about the visitor.
#### Email:
![Host](https://user-images.githubusercontent.com/44192857/69889929-9dc0f480-1319-11ea-92da-4c5e236a2d62.jpeg)

#### SMS:
For sms we are using Nexmo API. Since the account is in trial mode, msgs can only be send to the numbers which are whitelisted. For sending sms to unkown numbers without the need to whitelist them we need to buy a Nexmo virtual number.
![WhatsApp Image 2019-11-30 at 2 36 14 PM](https://user-images.githubusercontent.com/44192857/69898387-1b6b1b80-137f-11ea-8400-3d65674cb43e.jpeg)

### Information send to Visitor
Contains information about the Host.
![Visitors](https://user-images.githubusercontent.com/44192857/69889830-0d82af80-1319-11ea-8838-73ed0b693014.png)

## Built With
- [jQuery](https://www.w3schools.com/jquery/jquery_ref_ajax.asp) - [Ajax](https://www.w3schools.com/jquery/jquery_ref_ajax.asp) - jQuery simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development.</br>
- [Bootstrap](https://getbootstrap.com/) - Extensive list of components and Bundled Javascript plugins.</br>
- **Node.js** - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</br>
- **Express.js** - Fast, unopinionated, minimalist web framework for Node.js. </br>
- **ORM Sequelize** - Sequelize is a promise-based ORM for Node. js and io. js. It supports the dialects PostgreSQL, MySQL, MariaDB, SQLite and MSSQL and features solid transaction support, relations, read replication and more.
