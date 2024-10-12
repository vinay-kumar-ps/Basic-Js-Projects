const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Life is what happens when you're busy making other plans. — John Lennon",
  "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. — Martin Luther King Jr.",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "The best way to predict the future is to create it. — Peter Drucker"
]

const usedIndexes =new Set()
    const quoteTag =document.getElementById("quote")

function generateQuote() {
if (usedIndexes.size >= quotes.length){
    usedIndexes.clear()
}

    while (true){
    const randomIdx =Math.floor(Math.random() *quotes.length)
    

    if (usedIndexes.has(randomIdx)) continue

    const quote =quotes[randomIdx]
    quoteTag.innerHTML =quote;
    usedIndexes.add(randomIdx)
    break
    }
    
}