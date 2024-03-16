const library = document.getElementById("library");

const title = document.getElementById("title");
let newTitle;

const author = document.getElementById("author");
let newAuthor;

const pages = document.getElementById("pages");
let newPages;

const has_read = document.getElementById("has_read");
const not_read = document.getElementById("not_read");
const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    let newTitle = title.value;
    let newAuthor = author.value;
    let newPages = pages.value;
    console.log(newTitle + newAuthor + newPages);
    title.value = "";
    author.value = "";
    pages.value = "";

    let newBook = document.createElement("div");
    newBook.classList = "book";
    newBook.innerText = "newBook";

    library.append(newBook);

    
    
    
    //Need this so window doesn't refresh
    e.preventDefault();
})

