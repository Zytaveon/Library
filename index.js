const library = document.getElementById("library");
const libList = [];

const title = document.getElementById("title");
let newTitle;

const author = document.getElementById("author");
let newAuthor;

const pages = document.getElementById("pages");
let newPages;

const has_read = document.getElementById("has_read");
const not_read = document.getElementById("not_read");
const form = document.getElementById("form");

moreBooks();

form.addEventListener('submit', (e) => {
   
    //Create new book and add to array
    libList.push(new Book(title.value, author.value, pages.value, has_read.checked));

    //Reset Form
    title.value = "";
    author.value = "";
    pages.value = "";
    has_read.checked = false;
    not_read.checked = false;

    let newBook = document.createElement("div");
    let newButton = document.createElement("button");
    newButton.classList.add("bookButton", "tryMe");
    newBook.classList.add("book");
    newBook.innerText = libList[libList.length - 1].title;
    
    newBook.append(newButton);
    library.append(newBook);
 
    //Need this so window doesn't refresh
    e.preventDefault();
})

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.sayName = function(){
    console.log(this.title);
}


function moreBooks(){
    for(let i = 0; i < 70; ++i){

        let createBook = new Book(toString(i), toString(i), i, false);
        libList.push(createBook);

        let newBook = document.createElement("div");
        newBook.innerText = "Example Book: " + i;
        newBook.classList.add("book");

        let newContainer = document.createElement("div");
        newContainer.classList.add("buttonContainer")
        

        let newButton = document.createElement("button");
        newButton.classList.add("bookButton");
        newButton.classList.add("readButton");
        newButton.addEventListener('click', flipButton);

    
        newContainer.append(newButton);
        newBook.append(newContainer);
        library.append(newBook);

        
    }
}

function flipButton(event){
    if(this.classList[1] == "readButton"){
        this.classList.remove("readButton");
        this.classList.add("unreadButton");
    }

    else{
        this.classList.remove("unreadButton");
        this.classList.add("readButton");
    }
}

