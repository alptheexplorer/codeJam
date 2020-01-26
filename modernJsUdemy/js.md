# Some quick notes from a UDEMY JS course

## DOM selectors for multiple elements 
Here's some quick DOM element methods:

- `document.querySelectorAll('...')`

The `.forEach()` method is a simple shortcut to a forloop for instance the following will change all li elements to grey:

``` javascript
const lis = document.querySelectorAll('li');

lis.forEach(myFunction);

myFunction(item, index){
    item.style.background = '#aaa';
}
```


