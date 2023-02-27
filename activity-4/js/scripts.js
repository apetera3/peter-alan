// welcome message
var user = 'Jack';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are the latest reviews for the new Logitech Keyboard!';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

// product price
var price = 80,
    studentDiscount = .25,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);