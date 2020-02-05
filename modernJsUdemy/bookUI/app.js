
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI(){
    UI.prototype.addBookToList = function(book){
        const list = document.getElementById('book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
           <td>${book.title}</td>
           <td>${book.author}</td>
           <td>${book.isbn}</td>
           <td><a href="#" class="delete">X<a></td>
         `;

         list.appendChild(row);

    }
}

UI.prototype.addCheck = function(){
    const tr = document.createElement('tr');
    const form = document.querySelector('#book-form');
    tr.id = "checkForm";
    const container = document.querySelector('.container');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    td1.innerHTML = "Do you confirm entry"
    const button1 = document.createElement('input');
    const button2 = document.createElement('input');
    button1.type = "button";
    button1.value = "Yes";
    button1.id = "yesButton";
    button2.type = "button";
    button2.value = "No";
    button2.id = "noButton";
    td2.appendChild(button1);
    td2.appendChild(button2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    container.insertBefore(tr,form)
}

UI.prototype.showAlert = function(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container'); 
    const form = document.querySelector('#book-form');

    container.insertBefore(div, form); 
    window.setTimeout(function(){
        document.querySelector('.alert').remove();
    },3000);

}

UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    
}


document.getElementById('book-form').addEventListener('submit', function(e){
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const book = new Book(title, author, isbn);
    const ui = new UI();

    if(title === '' || author === '' || isbn === ''){
        ui.showAlert('Please fill in all fields', 'error');
        
    e.preventDefault();
    }
    else{

  ui.addCheck();
    document.querySelector('#yesButton').addEventListener("click", function(){
    
    
    ui.addBookToList(book);
    ui.showAlert('Book added', 'success');
    ui.clearFields();
   
    window.setTimeout(function(){
        document.querySelector('#checkForm').remove()
    },1000);
    e.preventDefault();
  })

  document.querySelector('#noButton').addEventListener("click", function(){
    ui.showAlert("entry cancelled", "error");
    window.setTimeout(function(){
        document.querySelector('#checkForm').remove()
    },1000);

      })
