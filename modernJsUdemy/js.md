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


## Traversing the DOM
Now suppose we have a UL as below:

``` html
   <ul class="collection">
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> 
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li> 
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
              <li class="collection-item">
                List Item
                <a href="#" class="delete-item secondary-content">
                  <i class="fa fa-remove"></i>
                </a>
              </li>
            </ul>
```
What if say I want to add an id to the second li element?

I could do this by simply `document.querySelector('li:nth-child(2)')`

But a neater way of say accessing the second element is by using the element properties. 

``` javascript
let foo - document.querySelector('ul.collection');
let val = foo.childNodes[2];

``` 


## Creating elements

Now suppose we wanted to add another li element to our above ul. We'd say:

``` javascript

const li = document.createElement('li');

li.className = 'collection-item';

li.appendChild(document.createTextNode('hello world');

document.querySelector('ul.collection').appendChild(li);
```

## Event Listeners 

Suppose we wanted to print the type of an event each time a 'clearTasks' button is pressed. This is done as:

``` javascript
const clearBtn = document.querySelector('.clear-tasks');

clearBtn.addEventListener('click', runEvent);

function runEvent(e){
  // e being the event object that gets created 
  console.log(`EVENT TYPE: ${e.type}`);
}

```

Some other common event parameters are `mouseenter, mouseup, mouseleave, mouseover, mouseout`

## OOP in ES5

Here is how we construct an object literal:

``` javascript
const brad = {
  name: 'Brad';
  age: 30
}
```
and a simple constructor:

``` javascript
function Car(color){
  this.color = color;
}

const Ferrari = new Car(red);
``` 

- Using `this` in global scope returns the `window` object. 

And some common built in constructors are:

``` javascript
const num = new Number(2);
const bool = new Boolean(true);
// and the weirdest of all:
const getSum = new Function('x', 'y', 'return x+y');
``` 

### Prototypes 
Every object inherits from first #ObjectName.prototype then from Object.prototype

Suppose we have a Person object as follows:

``` javascript
function Person(fName,lName,dob){
  this.fName = fName;
  this.lName = lName;
  this.bDay = new Date(dob);
  // now instead of defining calculateAge here we define it as part of the prototype
}

Person.prototype.calculateAge = function(){
  ...//method body
}
``` 
The above is the old school way of defining an object, here is an alternative, using dynamic object extension offered by the engine.

``` javascript
// first we define a prototype
var proto = {
  hello: function hello() {
    return 'hello, my name is' + this.name;
  }
};

var george = Object.create(proto);
// dynamic object extension
george.name = 'George';
```

### Using Object.create()

``` javascript
const person = Object.create(personPrototypes, {
  firstName = {value: 'Alp'},
  lastName = {value: 'Ozen'}
});
// the resulting person object 
```

### ES6 classes
Here's the syntax:

``` javascript
class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName; 
  }
}
```

Note that any method added to a class gets added to the prototype. 

### Subclasses 

In a sense the new ES6 class syntax is very similar to Java:

``` javascript
class Animal{
  constructor(feetNumber){
    this.feetNumber = feetNumber
  }
}

class Dog extends Animal{
  constructor(barkSound, kind){
    this.barkSound = barkSound;
    this.kind = kind; 
  }

  static bark(){
    return ' Dog is barking ${this.barkSound}'
  }
}


```

## Async JS, Ajax & Fetch API

The reason for wanting to use async programming for web purposes is to prevent page refreshes for instance while requesting new data upon user click. This is facilitated through the XMLHttpRequest API. Here is how one would use `xhr` to asynchronously receive data from a text document. 

``` javascript
// we first add an event listener
document.addEventListener("click", loadData);

function loadData(){
  const xhr = new XMLHttpRequest();

  xhr.OPEN("GET", "data.txt", true);
  xhr.onload = function(){
    if(this.status === 200){
      document.getElementById('output').innerHTML = `<h1> ${this.responseText} </h1>`
    }
  }
}

``` 

Similarly, we can also fetch data from an external server as follows:

``` javascript 
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function() {
    if(this.status === 200){
      const response = JSON.parse(this.responseText);

      let output = '';

      if(response.type === 'success'){
        response.value.forEach(function(joke){
          output +=   `<li> ${joke.joke}</li>`
        })
      }else{
        output += '<li> Something went wrong</li>';
      }
    }
  }

  xhr.send();

  e.preventDefault();
}

```











