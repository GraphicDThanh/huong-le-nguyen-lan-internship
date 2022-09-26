## Exercise 2:
### Target: Target: Attributes, Classes, and CSS Manipulation
#### _Chapter 9:_
- Write a JavaScript program to count and display the items of a dropdown list, in an alert window.
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8 />
    <style type="text/css">
      body {margin: 30px;}
    </style>   
    <title>Count and display items of a dropdown list - w3resource</title>
  </head>
  <body>
    <form>
      Select your favorite Color :
      <select id="mySelect">
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
        <option>White</option>
      </select>
      <input type="button" onclick="getOptions()" value="Count and Output all items">
    </form>
  </body>
</html>
```
