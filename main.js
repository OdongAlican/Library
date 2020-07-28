let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}


function addBookToLibrary() {

    const Book1 = new Book("Weep Not Child", "Ngugi Wa Thiongo", 234, "No");
    const Book2 = new Book("Weep No", "Wa Thiongo", 234, "No");
    const Book3 = new Book("Not Child", "Ngugi", 234, "No");
    const Book4 = new Book("Weep Child", "Ngugi Thiongo", 234, "No");
    const Book5 = new Book("Weep Not Child", "Ngugi Wa Thiongo", 234, "No");
    myLibrary.push(Book1);
    myLibrary.push(Book2);
    myLibrary.push(Book3);
    myLibrary.push(Book4);
    myLibrary.push(Book5);

}

addBookToLibrary()

function render(){
    let output = "";
    for(let i=0; i < myLibrary.length; i++){
        output += `
        <div class=card col-lg-3>
            <p>${myLibrary[i].title}</p>
            <p>${myLibrary[i].author}</p>
        </div>
        `
    }

    document.getElementById("book-list").innerHTML = output
}

render()