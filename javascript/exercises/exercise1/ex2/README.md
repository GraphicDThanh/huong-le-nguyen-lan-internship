## Exercise 1:
### Target: Selecting Elements, Getting Values, and Setting Values
#### _Chapter 2: About Me_
- Start with this HTML and save it as "aboutme.html":
```
<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8"/>
  <title>About Me</title>
</head>
<body>
  <h1>About Me</h1>
  
  <ul>
    <li>Nickname: <span id="nickname"></span>
    <li>Favorites:  <span id="favorites"></span>
    <li>Hometown: <span id="hometown"></span>
  </ul>
  
 </body>
</html>
```
- Add a `script` tag to the bottom.
- Change the body style so it has a font-family of "Arial, sans-serif".
- Replace each of the spans (nickname, favorites, hometown) with your own information.
- Iterate through each li and change the class to "listitem". Add a `style` tag that sets a rule for "listitem" to make the color red.
- Create a new `img` element and set its `src` attribute to a picture of you. Append that element to the page.
