@ v1.01 : Commit 3

- Chose to use MVC pattern.. Or at least what I thought it should look like. 
- Frontend (/testapp) uses React.js 
- Backend (/Server) uses Node.js & related dependencies i.e Express
- The Control folder was meant to test out the logic for calculating change

*How its supposed to work*
- The client entry point is App.js
 1. Client enters their amount in the form which takes their name and amount. Form is in the <VendingForm/> component
 2. Client submits form to the server {POST request}
 3. Server responds and data is mounted onto the <Change/> component.


 *Challenges*
 1. POST request not working {CORS error}. Knowledge gap of apis and backend logic.
 
 (Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://localhost:5000/api/posts. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 404.)

*Diagnosis?*
1. Documents suggests I have to make my api public. {Inadequate knowledge}
2. Tested my post functionality using an online json dummy server and it was working. Therefore problem is with my api

*Possible solutions?*
- Searching::::
MongoDB -=> ??


*HOW TO RUN THE APP*
1. cd to /Server and run _npm install_ to install dependencies followed by _node server_
2. cd to /testapp and run _npm install_ to install dependencies followed by _npm start_

