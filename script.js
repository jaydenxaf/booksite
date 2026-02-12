const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://images.unsplash.com/photo-1629992101753-56d196c8aced?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://images.unsplash.com/photo-1474932430478-3a7fb0500e3e?q=80&w=800&auto=format&fit=crop"
    }
];

let currentIndex = 0;

function changeBook() {
    currentIndex = (currentIndex + 1) % books.length;
    
    const book = books[currentIndex];
    
    // Update the DOM elements
    document.getElementById('book-title').innerText = book.title;
    document.getElementById('book-author').innerText = `by ${book.author}`;
    document.getElementById('featured-img').src = book.image;
    
    console.log(`Now showing: ${book.title}`);
}
