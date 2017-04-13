
const quotes = [
    
    { 
      quote: "Being the richest man in the cemetery doesn't matter to me.\n\
              Going to bed at night saying we've done something wonderful, that's what matters to me.",
      
      author: "Steve Jobs"
    },
    
    { 
      quote: "Simplicity is the ultimate sophistication.", 
      
      author:"Leonardo da Vinci"
    },
    
    { 
      quote: "Innovation distinguishes between a leader and a follower.",
    
      author: "Steve Jobs"
    },
    
    {
      quote: "As a well-spent day brings happy sleep, so a life well spent brings happy death.", 
      
      author: "Leonardo da Vinci"
    },
    
    {
      quote:"Sometimes life is going to hit you in the head with a brick. Don't lose faith.", 
    
      author: " Steve Jobs"
    },
    
    { 
      quote: "The noblest pleasure is the joy of understanding.", 
    
      author: "Leonardo da Vinci"},
    
    {
      quote: "I'm convinced that about half of what separates the successful entrepreneurs \n\
               from the non-successful ones is pure perseverance.", 
      
      author: "Steve Jobs"
    },
    
    {
      quote:"The greatest deception men suffer is from their own opinions.", 
    
      author: "Leonardo da Vinci"
    },
    
    {
      quote: "Innovation distinguishes between a leader and a follower.", 
      
      author: "Steve Jobs"
    },
    
    {
      quote: "Iron rusts from disuse, stagnant water loses its purity and in cold weather becomes frozen, \n\
               even so does inaction sap the vigor of the mind.", 
      
      author: "Leonardo da Vinci"
    },
    
    {
      quote: "Simplicity is the ultimate sophistication.", 
      
      author: "Leonardo da Vinci"
    }
];

var quoteButton = document.querySelector("#quoteButton");
var quoteDisplay = document.querySelector("#quoteDisplay");
var quoteArr = [];
var authorArr = [];
var totalQuotes = quotes.length;
var count = 0;


function fillArrays () {
    for(var i =0; i < quotes.length; i++){
        quoteArr.push(quotes[i].quote);
        authorArr.push(quotes[i].author);
    }
    
};

fillArrays();



function displayQuote () {
    
    
    if(count < totalQuotes ) {
        quoteDisplay.innerHTML = '<h4>' + '<q>' + quoteArr[count] + '</q>' + '</h4>' + '<br/>' + authorArr[count];
        count += 1;
       if (count === totalQuotes){
           count = 0;
       }
    } 
    
  
 };
 
 
 

quoteButton.addEventListener('click', function() {
    displayQuote();
});

