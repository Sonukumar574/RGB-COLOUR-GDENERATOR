const box = document.getElementById("text");

// Step 1: Store original text
const originalText = box.innerText.trim();

// Step 2: Clear the box
box.innerText = "";

// Step 3: Split into words
const words = originalText.split(" ");
let i = 0;

// Step 4: Typing function
function typeWord() {
  if (i < words.length) {
    box.innerHTML += words[i] + " ";
    i++;
    setTimeout(typeWord, 800); // Adjust speed here
  }
}

// Start typing
typeWord(); 