function Book(name, author, pages, read){

    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){

        return this.name + " was written by " + this.author + " and has " + pages +" number of pages." + read;
    }
}


const book1 = new Book("hobbit","JRR Tolkien",239,false);

console.log(book1.info());
