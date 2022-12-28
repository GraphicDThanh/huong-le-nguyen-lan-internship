# Big Practice TypeScript: Google Keep

### Overview

- Build a Note Web Application
- Description: For one user but just when user logged in can use this app. User's note data will save in JSON server
- Design:
  - Home page based on [Google Keep](https://keep.google.com/)
  - Login page based on [Google login](https://accounts.google.com/v3/signin/identifier?dsh=S604568833%3A1669618114483646&hl=vi&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=ARgdvAs4p4kElAglL315rF4bWPsa1lvmR-Q-Dtq5aE-k0fgPr0CXJShwoVW7SpdWCpLZPMwSNGQ5Jg)
- Plan: [plan](https://docs.google.com/document/d/1PmVpm1iUnGtteS2p_BiP2o6RohPkYhZL015WfNVRzwA/edit#heading=h.xkxditrpo70s)

### Targets

- Get familiar with and understand the power of TypeScript language in the specific and typed language in general
- Get ready to ability reading comprehension for the next training course/framework (React, Angular, Node… or anything related to TypeScript language later)

### Requirements

- [TypeScript Script Big Practice requirement](https://docs.google.com/document/d/1LBgy__yR98Ml9-ABkef3TgRHJSRqAO7F6Os755pLrN0/edit#heading=h.sq2199c0soky)

### Information

- Timeline
  - Estimate day: 8 days
  - Actual day:
- Techniques:
  - HTML5/CSS3
  - JavaScript
  - TypeScript
  - MVC model
  - JSON server
  - localStorage
  - Parcel
  - Eslint
  - Prettier
- Editor: Visual Studio Code.

### Development Environment

- Node v16.17
- npm v8.15.0
- Parcel v2.7
- Eslint v8.29
- Prettier v2.8
- TypeScript v4.9.3

### App Bio

- Google Keep is an app that can help you keep your notes in a modern way with the facilities provided. With a user-friendly interface, Google Keep can add, edit, and delete your notes.

### Main App Feature

- Login:
  - Form login validate email format and password
  - Form login also check email and password if they correct with user's data available or not
- SignUp:
  - User can create a new account
- Logout:
  - User can logout
- Home:
  - User can add a new note
  - User can update a note
  - User can move a note to trash
  - User can delete a note with confirming message

### Getting Started

- Step 1: Clone repository
  - With HTTPS :
    - `$ git clone https://github.com/GraphicDThanh/huong-le-nguyen-lan-internship.git`
  - With SSH:
    - `$ git clone git@github.com:GraphicDThanh/huong-le-nguyen-lan-internship.git`
- Step 2: `cd huong-le-nguyen-lan-internship`
- Step 3: Move to branch feat/typescript-big-practice
  - `git checkout feat/typescript-big-practice`
- Step 4: `cd  typescript/big-practice`
- Step 5: Now you need to install packages
  - `$ npm i`
- Step 6: After installing the packages
  - `$ npm run dev`
- Step 7: Open [localhost](http://localhost:1234) to see the website
- Step 8: User information to login this app
  - email: abc@gmail.com
  - password: 123456789a
