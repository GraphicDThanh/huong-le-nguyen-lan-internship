## Exercise Form:
- In that folder, create an HTML page with a signup form [signup.html](https://www.cs.uregina.ca/Links/class-info/215/dom2/lab6_JSDOM_Manipulations/signup.html). Add all support .css and .js files for lab 6 to this folder only.
- You may use the [sample code from the link above](https://www.cs.uregina.ca/Links/class-info/215/dom2/lab6_JSDOM_Manipulations/signup.html). Check the TODO: comments carefully in all files if you do.
- If you have CSS styling, please use an external CSS file.
- You will use two external JavaScript files, signup_r.js to register submit and reset events using DOM2 event registration, and validate.js to validate and reset the form.
- When the SignUp button is clicked, a submit event will be triggered. Your SignUpForm() function must handle the event and provide proper feedback to the user using DOM manipulation.
- Red text should appear above the field(s) if they have invalid format, are too long or are empty - you are adding regular expression validation to the Lab 5 rules.
- You should use DOM Operations as much as possible. Use innerHTML only for small changes. See the sample code for an example of what to do.
- The following is an example showing some invalid input messages in red text.
![Image](https://user-images.githubusercontent.com/93907879/192502332-6987e9c8-aaa8-487a-93d1-41b490d46bd7.png)
- Note: Make sure to design proper logic to give specific feedback. If a field is empty, only warn about the empty field - do not warn about that field being too long or having invalid format. Fields that have valid input should have no error message showing.
![Image](https://user-images.githubusercontent.com/93907879/192502423-1c69a6fe-4f89-4770-9e20-a8045af82edc.png)
- If all input is valid, detailed user information should be displayed in a special div at the bottom.
![Image](https://user-images.githubusercontent.com/93907879/192502512-ddca1a0d-1fcb-4d63-a331-3773105b9d40.png)
