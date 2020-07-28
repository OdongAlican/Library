let myLibrary = JSON.parse(localStorage.getItem('book-library-data')) || []; 
 const saveData = (arr) => { 
   localStorage.setItem('book-library-data', JSON.stringify(arr)); 
 }; 

document.addEventListener("DOMContentLoaded", render)
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

  const title = document.getElementById('book-title').value
  const author = document.getElementById('book-author').value
  const pages = document.getElementById('book-pages').value
  const read = document.querySelector('input[name="read"]:checked').value

  const newBook = new Book(title,author,pages,read)

  myLibrary.push(newBook)

  saveData(myLibrary)

  render()
}

function render(){
    let output = "";
    for(let i=0; i < myLibrary.length; i++){
        output += `
      <div class="card col-lg-5 m-3 p-0">
         <div class="card-header w-100">
            No of Pages ${myLibrary[i].pages}
          </div>
           <div class="card-body">
           <blockquote class="blockquote mb-0">
              <p> <span class="title-head">Title:</span>
                ${myLibrary[i].title}
              </p>
              <p> <span class="title-head">Read Status:</span>
                ${myLibrary[i].read}
              </p>
              <footer class="blockquote-footer">Written By<cite title="Source Title">${myLibrary[i].author}</cite></footer>
         </blockquote>
        </div>
        <div>
        <button class="btn btn-info m-3" onclick="changeStatus(${i})">Change Status</button>
        <button class="btn btn-danger" onclick="deleteBook(${i})">Delete</button>
        </div>

     </div>
        `
    }

    document.getElementById("book-list").innerHTML = output
}

document.getElementById("new-book").addEventListener("click", displayModal)
const modal = document.getElementById('book-modal')

function displayModal(){

  modal.classList.toggle('book-div')

}

function changeStatus(index) {
     let book = myLibrary[index]
     if (book.read == 'yes'){
          book.read = 'no'
          localStorage['book-library-data'] = JSON.stringify(myLibrary)
          render()
     }

     else if (book.read == 'no') {
          book.read = 'yes'
          localStorage['book-library-data'] = JSON.stringify(myLibrary)
          render()
     }

}


function deleteBook(index){
  myLibrary.splice(index, 1)
  localStorage['book-library-data'] = JSON.stringify(myLibrary)
  render()
}