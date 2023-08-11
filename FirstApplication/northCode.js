//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const { syncIndexes } = require("mongoose")

/*

comments - // single line and "/* is for multi line.
Concatenation - this is done using '' + ''

`` - String Literals these are writen with the third quotation mark called the back tick.This means 
that the string can be expressed with variables inside it using the notation ${}, and it will resolve to the correct string value.

NaN - This means Not a Number. (This value type is a Number)
let - This allows the value of a variable to be reassigned.
const - we are telling our program that its value is not allowed to change. 
const to declare your variables unless you are sure you will want to reassign the value at some point.
var - Olders Syntax

Type of - this is used to do type checking.

accessing key parts of an object can be done using dot notation and using bracket notation

Bracket Notation is best for dynamic keys




*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*

Practice Question One.

Greet Friends!
The greetFriend function will take a string of a name, and should return a string greeting them as in the examples below.

Examples:

greetFriend("Douglas");
// returns 'Hello Douglas!'

greetFriend("Maddie");
// returns 'Hello Maddie!'

greetFriend("Poonam");
// returns 'Hello Poonam!'
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function greetFriend(name){

   // return `Hello ${name}!`; // This method of returning is using String Literals.
    return "Hello " + name + '!' // This method of returning is using concatenation.

};

console.log(greetFriend('Kaligo'));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Practice Question Two.

Add Two Numbers
Write a function that takes two numbers and returns the sum of those numbers.

Example:

add(2, 2)
// returns 4

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function add (a, b) {

    const sum = a + b;
    return sum;

};

console.log(add(3, 5));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Practice Question Three

Odd or Even?
Write a function that takes a single integer and returns a string of "odd" if it is an odd number, or "even" if it is even.

Example:

oddOrEven(1);
// returns "odd"

oddOrEven(2);
// returns "even"
Note that in many other programming languages, "integer" is a data type. JavaScript only has the Number type, which includes 
both integers and decimals. For the purpose of this exercise, integer means "whole number"
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function oddOrEven(num){

    if (num % 2 === 0){

        return "even";

    } else {

        return "odd";

    }

};

console.log(oddOrEven(6));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Practice Question Four

Find the First Odd Number
Complete the function findFirstOdd, so that it takes an array of numbers and returns the first odd number.

If there are no odd numbers, the function should return undefined.

Examples:

findFirstOdd([1,4,5])
// returns 1

findFirstOdd([2,4,5])
// returns 5

findFirstOdd([2,4,6])
// returns undefined
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function findFirstOdd(numbers){
    for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] % 2 === 1){
            return numbers[i]; // When you put the return here after the value has been returned there will be no further computation and the function break.
            //console.log(numbers[i]);
        }
    }
return undefined;
}
console.log(findFirstOdd([,4,2,3,4,5]));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Practice Question Five

Retrieve Password
Write a function that takes a user object, which represents a user of the Northcoders website, and returns the value of the password key from that object.

If the user object does not contain a password key, the function should instead return undefined.

A typical user object might look like this:

{ name: 'Lucy', password: 'n0rthc0derzzz' }
Examples:

retrievePassword({ name: 'Lucy', password: 'n0rthc0derzzz' })
// returns 'n0rthc0derzzz'

retrievePassword({ name: 'Sam', password: 'hi!' })
// returns 'hi!'

retrievePassword({ name: 'Halima', favouriteFood: 'pizza' })
// returns undefined
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function retrievePassword(user){

    const password = user.password; // This variable is created to point directly to the password key in the object to avoid confusion

    return password;

};

console.log(retrievePassword({ name: 'Lucy', password: 'n0rthc0derzzz' }));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

practice Question six 

Retrieve Key
Write a function that takes an object, and a string of the name of a key on that object. It should return the value of that key.

If the key doesn't exist on the object, it should return undefined

Examples:

retrieveKey({ name: 'Sam' }, 'name');
// returns 'Sam'
retrieveKey({ password: 'Chips!' }, 'password');
// returns 'Chips!'
retrieveKey({ name: 'Sam' }, 'age');
// returns undefined

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function retrieveKey(object, key){

    const dynamicKey = object[key];

    return dynamicKey;
    
}

console.log(retrieveKey({ name: 'Sam' }, 'name'));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Practice Question Seven 

Find Even Length Strings
This function will take an array of values, and should return an array of all the even length strings.

Anything that's not a string, or not a string of even length, should not be returned in the array.

If there are no even length strings, it should return an empty array.

Examples:

findEvenLengthStrings(['hi', 'bye'])
// returns ['hi']

findEvenLengthStrings(['bye'])
// returns []

findEvenLengthStrings(['keepOnlyMe', 'notMe', 4])
// returns ['keepOnlyMe']
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function findEvenLengthStrings(items){

    const result = [];

    for (let i=0; i<items.length; i++){
        
        const arrayElement = items[i];

        if (typeof arrayElement === 'string' && arrayElement.length % 2 === 0){
            
            result.push(arrayElement);
        }

    }

    return result;
}
console.log(findEvenLengthStrings(['hi', 'bye']));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Practice Question Eight


Is This a Palindrome?
Write a function that takes a string, and returns true if it is a palindrome, and false if it is not.

(A palindrome is a word that, when reversed, is exactly the same. e.g. "madam" or "racecar")

Examples:

isThisAPalindrome('yay');
// returns true

isThisAPalindrome('no');
// returns false
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function isThisAPalindrome (string){

    let reversedString = string.split('').reverse().join('');
    
    //.split('') - str:split() splits a string using a pattern string to 
    //determine where the splits should occur, returning a node-set containing the resulting strings.
    
    //.reverse() - method reverses an array in place and returns the reference to the same array, 
    //the first array element now becoming the last, and the last array element becoming the first.
    
    //.join('') - method joins all elements of an array into a string.

    console.log(reversedString);

    if (reversedString === string){

        return true;

    } else {

        return false;

    }

}

console.log(isThisAPalindrome('omo'));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Practice Question nine

Find Biggest and Smallest
Write a function that takes an array of numbers and returns the biggest and smallest in an object.

Example:

findBiggestAndSmallest([1, 2, 99, 100])

// returns { biggest: 100, smallest: 1 }
If there is only one number in the array, that will be both the biggest and the smallest.

If there are no numbers in the array, it should return an empty object.
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
function findBiggestAndSmallest(numbers){

    const result = {};

    let biggest = numbers[0];
    let smallest = numbers[0];

    for (let i=0 ; i < numbers.length; i++){

        const currentNumber = numbers[i];

        if (currentNumber > biggest){

            biggest = currentNumber;
            

        } else if (currentNumber < smallest){

            smallest = currentNumber;

        }

    }

   // console.log(biggest);
   // console.log(smallest);

    result.biggest = biggest;
    result.smallest = smallest;

    return result
}

console.log(findBiggestAndSmallest([1, 2, 9,9, 10, 0, 123, 123423]));

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
Practice Question Ten 

Is This Prime?
Write a function that takes a single positive integer as its argument. If the number is prime, it should return true. Otherwise, it should return false.

(A prime number is a number that is divisible only by itself and 1 - for example 2, 3, 5, 7, 11. The number 1 is not a prime.)

Example:

checkIsPrime(2)
// returns true

checkIsPrime(4)
// returns false
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function checkIsPrime(num){

    if (num <= 1){
        return false;
    } 

    for (let i=2; i<=num/2; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
};
console.log(checkIsPrime(13));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Practice Question Eleven

Hello, Northcoders Party Planner!
Northcoders want to have a party, and have enlisted the use of your savvy coding skills to help them!

Uh oh - you're ready to send out your invitations when you spot some typos...

Some of the names from your database don't have capital letters, so you need to make sure you capitalise the first letter of all of the guests names.

Your greetGuest function will take a string of a first name and should return a string of a greeting with the capitalised name, as shown in the example below.

Examples:

greetGuest("Douglas");
// returns 'Hello Douglas!'

greetGuest("maddie");
// returns 'Hello Maddie!'

greetGuest("poonam");
// returns 'Hello Poonam!'
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
charAt() - method of String values returns a new string consisting of the single UTF-16 code unit at the given index.
toUpperCase() - method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

function greetGuest(name){

    const capitilisedName = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(capitilisedName);

    return `Hello ${capitilisedName}!`
}

console.log(greetGuest("unange"));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Practice Question twelve

Find the Useful Emails
The Northcoders party invitations have been sent and responses are coming in! In the interest of inclusivity, Northcoders has opted to make this a pay-what-you-want event.

The finance team need to keep track of how much people are willing to pay for a ticket. You have been asked to write a function which will tell the team if an email contains information about a ticket price or not.

The findTicketPrices function will take a string, and should return a value of true if the string contains a number, and false if it does not.

Examples:

findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?");
// returns true

findTicketPrices("I would be willing to pay 30 for a ticket");
// returns true

findTicketPrices("Thanks for making this event pay what you can afford!");
// returns false
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function findTicketPrices(emailstring){

    // \d - In Javascript \d represents any numeric digit between 0 and 9
    // +  - This indicates that there should be one or more numeric digits in the string
    // regularExpression.test(emailstring); - The test method checks is the string contains any matches from the regular expression pattern.

    const regularExpression = /\d+/;
    return regularExpression.test(emailstring);

};
console.log(findTicketPrices("Hello, I think I can pay 11 pounds, is that alright?"));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Practice Question Thirteen 

Making the Guest List
We need to keep track of the party guests, but the data we currently have combines the guests first and last names into a single name. You have been asked to separate the names to make the data easier to work with.

The makeGuestList function takes an object with a name property whose value will be a string consisting of a first name and a last name, separated by a space. The function should return an object.

The function should remove the name property, replace it with firstName and lastName properties, as shown in the examples below.

Examples:

makeGuestList({ name: "Hannah Fry", age: 46 });
// should return { firstName: "Hannah", lastName: "Fry", age: 46 }

makeGuestList({ name: "Paul Erdős", age: 46 });
// should return { firstName: "Paul", lastName: "Erdős", age: 46 }
Note: all other properties should remain unchanged.

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function makeGuestList(person){

    const fullName = person.name;
    const age = person.age;
    const separatedNames = fullName.split(" ")
    const firstName = separatedNames[0];
    const lastName = separatedNames[1];
    delete person.name;
    person.firstName = firstName;
    person.lastName = lastName;
    

    return person;

};
console.log(makeGuestList({ name: "Paul Erdős", age: 46 }));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Practice Question Fourteen

Tracking the Ticket Prices
You have been asked to update the guest list with the amounts that each guest is willing to pay for a ticket. Unfortunately,
 all of the ticket prices found in email messages have been sent to you as strings!

The function trackAttendees takes an attendee object and a string representing how much they are willing to pay.

It should return a modified attendee object, with an added property key of paidForTicket and value of the amount the attendee
 is willing to pay.

Examples:

trackAttendees({ firstName: "Veronica", lastName: "Green", age: 46 }, '25');
// should return { firstName: "Veronica", lastName: "Green", age: 46, paidForTicket: 25 }

trackAttendees({ firstName: "Anna", lastName: "Lytical", age: 27 }, '0');
// should return { firstName: "Anna", lastName: "Lytical", age: 27, paidForTicket: 0 }

trackAttendees({ firstName: "Ella", lastName: "Vaday", age: 30 }, '13');
// should return { firstName: "Ella", lastName: "Vaday", age: 30, paidForTicket: 13 }
Note: all other properties should remain unchanged.
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

function trackAttendees(person, ticketCost){

const paidForTicket = Number(ticketCost);
person.paidForTicket = paidForTicket;

return person;

}
console.log(trackAttendees({ firstName: "Ella", lastName: "Vaday", age: 30 }, '13'));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Practice Question Fifteen

Can We Have the Party?
It's time to see if we can host our party!

Before the party is confirmed, the shareholders need two criteria to be met:

At least 5 people must be in attendance
At least £100 must be generated via pay-what-you-want ticket sales
The isPartyViable function will be called with an array of guest objects. Each 
of those objects has a paidForTicket property with a number representing how much they are willing to pay for their ticket.

It should return a boolean value of false if not enough people are attending or 
attendees don't spend enough money on tickets, and true if enough people are attending and they spend enough money on tickets.

Examples:

const guests = [
  { name: "diya", paidForTicket: 15 },
  { name: "amul", paidForTicket: 2 },
  { name: "saleh", paidForTicket: 2 },
  { name: "philippa", paidForTicket: 30 },
]
isPartyViable(guests);
// should return false

const guests = [
  { name: "diya", paidForTicket: 15 },
  { name: "amul", paidForTicket: 2 },
  { name: "saleh", paidForTicket: 2 },
  { name: "philippa", paidForTicket: 30 },
  { name: "kev", paidForTicket: 6 },
  { name: "sarah", paidForTicket: 11 },
]
isPartyViable(guests);
// should return false

const guests = [
  { name: "diya", paidForTicket: 15 },
  { name: "amul", paidForTicket: 20 },
  { name: "saleh", paidForTicket: 2 },
  { name: "philippa", paidForTicket: 30 },
  { name: "kev", paidForTicket: 26 },
  { name: "sarah", paidForTicket: 11 },
]
isPartyViable(guests);
// should return true

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

function isPartyViable(guests){

    let attendance = 0;
    let moneyCollected = 0;
    for (let i=0; i<guests.length; i++){

        const singleGuestObject = guests[i];
        moneyCollected += singleGuestObject.paidForTicket;
        attendance++;
    }
    console.log(attendance);
    console.log(moneyCollected);
    if (attendance >= 5 && moneyCollected >= 100){
        return true;
    }else{
        return false;
    };
};

const guests = [
    { name: "diya", paidForTicket: 15 },
    { name: "amul", paidForTicket: 20 },
    { name: "saleh", paidForTicket: 40 },
    { name: "philippa", paidForTicket: 30 },
    { name: "kev", paidForTicket: 6 },
    { name: "sarah", paidForTicket: 11 },
]

console.log(isPartyViable(guests));

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Practice Question Sixteen 

Ordering Supplies
Hooray! The party has been given the go-ahead! Now it's time to write a function which will help us to order some supplies for the party.

Northevents Events Supplies™️ sell a range of goods which can help us to throw an amazing party!

The orderSupplies function takes two arguments: a supplies object with keys of party supplies and values of the cost of that supply, 
and the number of guests attending.

It should return a number showing the total cost of ordering one of each item per guest!

orderSupplies({ cake: 2, iceCream: 7 }, 2);
// should return 18

orderSupplies({ plates: 2, cups: 1, forks: 1, partyHats: 4 }, 20);
// should return 160

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function orderSupplies(supplies, guests){

    let totalCost = 0;

    for (const key in supplies){
        
        totalCost = totalCost + (supplies[key] * guests);
    }
    return totalCost;
}
console.log(orderSupplies({ plates: 2, cups: 1, forks: 1, partyHats: 4 }, 20));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

practice Question Sixteen 

How Many Tables?
Hooray! The party can go ahead, the guest list is finalised, and it's almost time to make the seating plan. But first, 
you need to figure out how many tables we need!

The number of guests may not divide evenly by the number of seats, so we will have to add some extra chairs to a few of the tables for them.

The function calculateTables takes two arguments, the number of guests and the number of seats around a table.

It should return an object with two properties: a key of tables with the value of the number tables, and a key of 
remainingGuests with a value of the number of guests without a seat who will need to be added to one of the other tables.

Examples Below.

calculateTables(4, 2);
// should return { tables: 2 , remainingGuests: 0 }

calculateTables(14, 6);
// should return { tables: 2 , remainingGuests: 2 }

calculateTables(26, 5);
// should return { tables: 5 , remainingGuests: 1 }

*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function calculateTables(guests, seats){

    let tables = parseInt(guests / seats);
    let remainingGuests = guests - (tables * seats);

    const result = {
        tables:tables,
        remainingGuests: remainingGuests
    
    }
    return result;

};
console.log(calculateTables(26, 5));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

Practice Question seventeen

Taxi Fare Calculator
Northdrivers Taxi Company™️ have asked for your help writing a function which will calculate the cost of getting to the party! 
Journeys are priced as follows:

Journeys up to 3 minutes long have a flat base rate cost of £5
Every minute after the first 3 will cost an extra 70p
The length of the journey is always rounded up to a whole number of minutes
The calculateTaxiFare function should take a number representing the length of a taxi journey in seconds, and return a number 
representing the cost of that journey in pence.

calculateTaxiFare(150);
// should return 500

calculateTaxiFare(360);
// should return 710

calculateTaxiFare(491);
// should return 920

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Math.ceil() - static method always rounds up and returns the smallest integer greater than or equal to a given number.

function calculateTaxiFare(seconds){

    const baseRate = 500;
    const extraTime = 70;
    let journeyCost = 0;
    const travelMinutes = Math.ceil(seconds / 60);
    let additionalMunites = 0;

    if (travelMinutes <= 3){

        journeyCost = baseRate;
    } else {
        additionalMunites = travelMinutes - 3;
        journeyCost = baseRate + ( additionalMunites * extraTime );
    }

    return journeyCost;
}
console.log(calculateTaxiFare(491));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Practice Question Nineteen

Who are the Winners?
The Northcoders party is nearly over & it's time to select the winners of the prize draw raffle!

You have been asked to write a function which will select the winners based on two factors: 
how much they paid, and their seat number. If both of these numbers are odd, the attendee wins a prize!

The pickWinners function will be passed an array of numbers representing ticket costs as its only argument. 
The index position represents the seat number.

Your task is to return an array of objects. Each object should contain two keys. 
The first key is seat with a value of the odd index. The second key is ticketCost with a value of the ticket 
price at that index in the input array.

Examples below.

pickWinners([6, 7, 12, 49])
// should return [{seat: 1, ticketCost: 7}, {seat: 3, ticketCost: 49}]
pickWinners([1, 3, 5, 7, 9, 11])
// should return [{seat: 1, ticketCost: 3}, {seat: 3, ticketCost: 7}, {seat: 5, ticketCost: 11} ]
pickWinners([1, 6, 13, 8, 29, 50])
// should return []
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function pickWinners(numbers){
    const result = [];
    for (let i=0; i<numbers.length; i++){
        const ticketCost = numbers[i];

        if(ticketCost % 2 === 1 && i % 2 === 1){

            const winningTicket = {
                seat : i,
                ticketCost: ticketCost
            }

            result.push(winningTicket);

        };
    }

    return result;

};
console.log(pickWinners([6, 7, 12, 49]));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
practice Question Twenty

Gathering Feedback
Phew! All your hard work paid off and the event was a success! Now that you have had some time to relax, it's time to consider 
the guests feedback.

You decide to break the feedback into three groups: positive (7-10), negative (0-3) or neutral (4-6).

The function gatherFeedback takes an array of arrays, each of these arrays contains both a string of the name of 
the attendee and a number showing how they rated the party out of 10.

It should return an object with three properties: a key of positive with a value of the number of positive reviews; 
a key of negative with a value of the number of negative reviews; and, a key of neutral with a value of the number of neutral reviews.

Examples:

gatherFeedback([['maddie', 10], ['jatinder', 3], ['rose', 6]]);
// returns {positive: 1, negative: 1, neutral:1}

gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 10]]);
// returns {positive: 3, negative: 0, neutral:0}

gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 1]]);
// returns {positive: 2, negative: 1, neutral:0}

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
function gatherFeedback(feedbackArray){

    let positive = 0;
    let neutral = 0;
    let negative = 0;

    for (let i=0; i<feedbackArray.length; i++){

        const eachFeedback = feedbackArray[i];
        const ratingValue = eachFeedback[(eachFeedback.length)-1];

        if (ratingValue >= 7 && ratingValue <= 10){

        positive++;

        }else if(ratingValue >= 4 && ratingValue <= 6){
        neutral++;
        }else if(ratingValue >= 0 && ratingValue <= 3){
        negative++;
        }
    };

    return {
        positive : positive,
        negative : negative,
        neutral : neutral
    }
};
console.log(gatherFeedback([['maddie', 10], ['jatinder', 10], ['rose', 1]]));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Entry challange question one 


function sayHappyBirthday(number){
    return `Happy Birthday, you are ${number} today!` //This is done using the string literals method that utilizes the third question mark and makes user of variables denoted by ${}

}
console.log(sayHappyBirthday(29));
*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Entry Challange Question Two 


function removeLastItem(arr){
    arr.pop();

    return arr;
}
console.log(removeLastItem([1,2,3,4,5,6,7,8]));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Entry Challange Question Three


function checkForEnoughBeds(beds, numofPeople){

    const peopleSleepingOnDoubles = beds.doubles * 2;
    const peopleSleepingOnSingles = beds.singles;

    const totalPeopleAccomodated = peopleSleepingOnDoubles + peopleSleepingOnSingles;
    //console.log(peopleSleepingOnDoubles);
    //console.log(peopleSleepingOnSingles);
    //console.log(totalPeopleAccomodated);

    if (numofPeople <=totalPeopleAccomodated){
        return true;
    }else{
        return false;
    };

}

console.log(checkForEnoughBeds({doubles:15,singles:10},56));
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Entry Challange Question Four

function makeAlternatingArray(array){
    if (array.length <= 1){
        return array;
    }

    const alternatingArray = [];

    for (let i = 0; i<array.length; i+=3){
        alternatingElement = array[i];
        alternatingArray.push(alternatingElement);

    }

    return alternatingArray;
}

console.log(makeAlternatingArray([1,2,3,4,5,6,7,8,9]));

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Entry Challange Question Five 



function countBy(x, n) {
    let z = [];

    let value = x

   
     for (let i=1; i<n+1; i++)
       {
        console.log(value * i);
        z.push(value * i);
       }
     return z;
  }
  console.log(countBy(2, 5));
*/
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /*


  function fakeBin(str){

    var newStr = "";
    for(var i=0;i<str.length;i++){
      if(Number(str[i])>=5){
        newStr += "1"
      }
      else{
        newStr += "0";
      }
    }
    return newStr;
  }
  console.log(fakeBin('45385593107843568'));
    */
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

   /*
   */

   function maps(x){
    const result = [];
    for (let i=0; i<x.length; i++){
        const singleElement = x[i];
        result.push(singleElement*2);
    }
    return result;
   }
   console.log(maps([1, 2, 3]));
