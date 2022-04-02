/*Date is a built-in object, just like Array or Object. It stores the datem time and provides methods for date/time management.
//For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date.
//CREATION
TO create a new Date object call new Date() with one of the following arguments:
new Date()
Without arguments - create a Date objet for the current date and time:

let now = new Date();
alert(now); // show current date/time
new Date(milliseconds)
//0 means 01.01.1970 UTC+0

let Jan01_1970 = new Date(0);
alert( Jan01_1970 );

//now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970);

An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.
It's a lightweight numeric representation of a date. We can always create a date from a timestamp using new Date(timestamp)
and convert the existing Date object to a timestamp using the date.getTime() method (see below).
Dates before 01.01.1970 have negative timestamps, e.g.:

//31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert( Dec31_1969 );


new Date(datestring)
If there is a single argument, and it's a string, then it is parsed automatically. The algorithm is the same as Date.parse uses,
we'll cover it later.

let date = new Date("2017-01-26");
alert(date);
The time is not set, so it's assumed to be midnight GMT and is adjusted according to the timezone the code is run in
So the result could be Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
 or
 Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

new Date(year, month, date, hours, minutes, seconds, ms)

Create the date with the given components in the local time zone. Only the first two arguments are obligatory.
The year must have 4 digits: 2013 is okay, 98 is not.
The date parameter is actually the day of the month, if absent then 1 is assumed.
If hours/minutes/seconds/ms is absent, they are assumed to be equal to 0.

For instance:
new Date(2011, 0, 1, 0, 0, 0, 0); //1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // the same, hours etc are 0 by default
The maximal precision is 1 ms (1/1000 sec):
let date = new Date(2011, 0, 1, 2, 3, 4, 567);
alert( date ); // 1.01.2011, 02:03:04.567

Access date components
There are methods to access the year, month and so on from the Date object:
getFullYear()
Get the year (4 digits)
getMonth()
Get the month, from 0 to 11.
getDate()
Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours(), getMinutes(), getSeconds(), getMilliSeconds()
Get the corresponding time components.
Not getYear(), but getFullYear()
Many Javascript engines implement a non-standard method getYear(). This method is deprecated. It returns 2-digit year sometimes.
Never use it. There is getFullYear() for the year.

Additionally, we can get a day of week:
getDay()
Get the day of the week, from 0 (Sunday) to 6 (Saturday).The first day is always Sunday, in some countries that's not so, but can't be changed.
All the methods above return the components relative to the local time zone.
There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(),
getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".

// current date
let date = new Date();

// the hour in your current time zone
alert( date.getHours() );

// the hour in UTC+0 time zone (London time without daylight savings)
alert( date.getUTCHours() );

// if you are in timezone UTC-1, outputs 60
// if you are in timezone UTC+3, outputs -180
alert( new Date().getTimezoneOffset() );

let today = new Date();

today.setHours(0);
alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
alert(today); // still today, now 00:00:00 sharp.

//AUTOCORRECTION
let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(date); // ...is 1st Feb 2013!

let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

alert( date ); // 1 Mar 2016

let date = new Date();
date.setSeconds(date.getSeconds() + 70);

alert( date ); // shows the correct date

let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set day 1 of month
alert( date );

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert( date ); // 31 Dec 2015

let date = new Date();
alert(+date); // the number of milliseconds, same as date.getTime()

let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

alert( `The loop took ${end - start} ms` );

let start = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = Date.now(); // done

alert( `The loop took ${end - start} ms` ); // subtract numbers, not dates

//we have date1 and date2, which function faster returns their difference in ms?
function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

alert( 'Time of diffSubtract: ' + bench(diffSubtract) + 'ms' );
alert( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms' );

function diffSubtract(date1, date2) {
  return date2 - date1;
}

function diffGetTime(date1, date2) {
  return date2.getTime() - date1.getTime();
}

function bench(f) {
  let date1 = new Date(0);
  let date2 = new Date();

  let start = Date.now();
  for (let i = 0; i < 100000; i++) f(date1, date2);
  return Date.now() - start;
}

let time1 = 0;
let time2 = 0;

// run bench(diffSubtract) and bench(diffGetTime) each 10 times alternating
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

alert( 'Total time for diffSubtract: ' + time1 );
alert( 'Total time for diffGetTime: ' + time2 );

// added for "heating up" prior to the main loop
bench(diffSubtract);
bench(diffGetTime);

// now benchmark
for (let i = 0; i < 10; i++) {
  time1 += bench(diffSubtract);
  time2 += bench(diffGetTime);
}

//DATE PARSING
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

alert(ms); // 1327611110417  (timestamp)

let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

alert(date);

alert(`Loading started ${performance.now()}ms ago`);
// Something like: "Loading started 34731.26000000001ms ago"
// .26 is microseconds (260 microseconds)
// more than 3 digits after the decimal point are precision errors, only the first 3 are correct
date = new Date(2012, 1, 20, 3, 12);
alert(date);
//new Date(datastring)
let d2 = new Date("February 20, 2012 03:12:00");
alert( d2 );

function getWeekDay(date) {
  let arr = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  return arr[date.getDay()];

}
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"

function getLocalDay(date) {
  if (date.getDay() == 0) {
    return 7;
  }
  return date.getDay();
}
let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) );        // should output "TU"
//Don't write a function twice
function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { // weekday 0 (sunday) is 7 in european
    day = 7;
  }

  return day;
}


function getDateAgo(date1, date2) {
  return new Date(date1.getTime()-date2 * 24 * 3600 * 1000).getDate();
}
let date = new Date(2015, 0, 2);
//alert(date.getTime());


alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}

function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getLastDayOfMonth(year, month) {
  date = new Date(year, month+1, 0);
  return date.getDate();
}

alert (getLastDayOfMonth(2012, 1));

function getSecondsToday(){
  let date = new Date();
  return date.getHours() * 3600 + date.getMinutes() + date.getSeconds() ;
}

alert(getSecondsToday());

function getSecondsToday() {
  let now = new Date();

  // create an object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
}
alert( getSecondsToday() );

function getSecondsToTomorrow() {
  let date = new Date();
  let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1, 0, 0, 0);
  return Math.round((tomorrow - date)/1000);
}
alert(getSecondsToTomorrow());


//alert(new Date(new Date -1));
function formatDate(date) {
  if ((new Date() - date) <=1) {
    return("right now");
  }
  else if ((new Date() - date) <= 60000) {
    return `${Math.round((new Date() - date)/1000)} sec. ago`;
  }
  else if ((new Date() - date) <= 3600000) {
    return `${Math.round((new Date() - date)/60000)} min. ago`;
  }
  else {
    let date2 = new Date(date);
    return `${date2.getDate()}.${date2.getMonth()+1}.${(date2.getFullYear() - 2000)} ${date2.getHours()}:${date2.getMinutes()}`;
  }
}
alert( formatDate(new Date(new Date - 1)) ); // "right now"
alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"
// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

let d = date;
d = [
  '0' + d.getDate(),
  '0' + (d.getMonth() + 1),
  '' + d.getFullYear(),
  '0' + d.getHours(),
  '0' + d.getMinutes()
].map(component => component.slice(-2)); // take last 2 digits of every component

// join the components into date
return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
*/