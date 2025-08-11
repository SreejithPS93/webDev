const myLibrary = [];

function Book(name, author, pages, read ){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.id = crypto.randomUUID();

    this.info = function(){
        return this.id + " " + this.name + " was written by " + this.author + " and has " + pages +" number of pages." + read;
    }

    


}

