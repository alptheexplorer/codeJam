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





