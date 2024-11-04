// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [{
    quote: `"Many of life’s failures are people who did not realize how close they were to success when they gave up."` ,
    author: `Thomas A. Edison`
}, {
    quote: `"Life is like a coin. You can spend it any way you wish, but you only spend it once"` ,
    author: `Lillian Dickson`
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."` ,
    author: `Babe ruth`
}, {
    quote: `"I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.."` ,
    author: `Neal Armstrong`
}, {
    quote: `"Spread love everywhere you go. Let no one ever come without leaving happier."` ,
    author: `Mother Theresa`
}, {
    quote: `"Always go with your passions. Never ask yourself if it’s realistic or not."` ,
    author: `Deepak Chopra`
}, {
    quote: `"When we are no longer able to change a situation, we are challenged to change ourselves."` ,
    author: `Viktor E. Frankl`
}, {
    quote: `"Always do your best. What you plant now, you will harvest later."` ,
    author: `Og Madino`
}, {
    quote: `"Life isn't about finding yourself. Life is about creating yourself."` ,
    author: `George Benard Shaw`
}, {
    quote: `"Everything you want is on the other side of fear."` ,
    author: `Jack Canfield`
}, {
    quote: `"You don't have to be great to start, but you have to start to be great."` ,
    author: `Zig Ziglar`
}, {
    quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."` ,
    author: `JAmes Cameron`
}, {
    quote: `"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things."` ,
    author: `Leonardo Da Vinci`
}, {
    quote: `"You must expect great things of yourself before you can do them."` ,
    author: `Michael Jordan`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."` ,
    author: `Albert Einstein`
}, ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})
