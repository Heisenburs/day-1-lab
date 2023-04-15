console.log('running script...')


//import or require a module
const fs = require('fs')
const request = require('request')
// console.log(typeof request);


// =============== Request Package =================
request('http://jsonplaceholder.typicode.com/users', function(err, res, body) {
    if (err) {
        console.log(err);
    }
// console.log(body);
// console.log(res);
})

const random = require('./utilities/random')
console.log(random(10,20));

const circle = require('./utilities/circle')
console.log(circle);
circle.area()
circle.circumference()

// ============= Our Own Module ===========
// import or require our own module
const daysOfWeek = require('./days-of-week')

//using the daysOfWeek module
// console.log(daysOfWeek.weekdays);
const day = daysOfWeek.getWeekday(4
)
// console.log(day);

// ============== NODE FS Module ===========
// console.log(typeof fs);

//write a new file
fs.writeFile('./hello.txt', 'Hello World', function(e) {
    if (e) {
        // creates an explicit error to stop our program
        throw Error(e.message)
    }
    // console.log('Done writing file!');
})

//update the data in a file
fs.appendFile('./hello.txt', ' more data', function() {
    // console.log('Done');
})