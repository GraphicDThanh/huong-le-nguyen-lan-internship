# Big Practice JavaScript: Google Keep

### Overview
- Build a Note Web Application
- Description: For one user but just when user logged in can use this app. User's note data will save in JSON server
- Design:
  - Home page based on [Google Keep](https://keep.google.com/)
  - Login page based on [Google login](https://accounts.google.com/v3/signin/identifier?dsh=S604568833%3A1669618114483646&hl=vi&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAs4p4kElAglL315rF4bWPsa1lvmR-Q-Dtq5aE-k0fgPr0CXJShwoVW7SpdWCpLZPMwSNGQ5Jg)
- Plan: [plan](https://docs.google.com/document/d/1ROXZqc8-eRKff-auMIWKkhY3HGG_UIwWJto0Wz2dcfc/edit#)

### Targets
- Apply knowledge of HTML5/CSS3/JavaScript (with ES6 syntax).
- Apply MVC concept
- DOM manipulation, form validation.
- Understand and apply localStorage
- Use DevTools for debugging issues

### Requirements
- [JavaScript Big Practice requirement](https://docs.google.com/document/d/1IKhmDPyauA5cIhqOFKY_B_w7ZimcuDdosjCgb9dW7jc/edit#)

### Information
- Timeline
  - Estimate day: 28 days
  - Actual day: 36 days
- Techniques: 
  - HTML5/CSS3
  - JavaScript
  - MVC model
  - JSON server
  - localStorage
  - Parcel
- Editor: Visual Studio Code.

### Development Environment
- Node v16.17
- npm v8.15.0
- Parcel v2.7
- Eslint v8.23

### App Bio
- Google Keep is an app that can help you keep your notes in a modern way with the facilities provided. With a user-friendly interface, Google Keep can add, edit, and delete your notes. 

### Main App Feature
- Login:
  - Form login validate email format, password length more than 8 and must contain letters and at least one digit
  - Form login also check email and password if they correct with user's data available or not
- Home:
  - User can add a new note
  - User can see a list notes
  - User can update a note
  - User can move a note to trash
  - User can select a list notes and move them to trash
  - User can see a list notes trash
  - User can delete a note with confirm message
  - User can select a list notes and delete them with confirm message

### Getting Started
- Step 1: Clone repository
  - With HTTPS :
     - `$ git clone https://github.com/GraphicDThanh/huong-le-nguyen-lan-internship.git`
  - With SSH: 
     - `$ git clone git@github.com:GraphicDThanh/huong-le-nguyen-lan-internship.git`
 - Step 2: `cd huong-le-nguyen-lan-internship` 
 - Step 3: Move to branch feat/reduce-feature
   -  `git checkout feat/big-practice-new-version`
- Step 4: `cd  javascript/big-practice`
 - Step 5: Now you need to install packages
   - `$ npm i`
 - Step 6: After installing the packages
   - `$ npm run dev`
 - Step 7: Open [localhost](http://localhost:1234) to see the website
 - Step 8: User information to login this app
   - email: abc@gmail.com
   - password: 123456789a
