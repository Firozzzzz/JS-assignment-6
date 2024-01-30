// Q1. new Date() -//

console.log(new Date());

// Q2. Date.parse() -//

let dp = Date.parse('11,Jan,2024')
console.log(dp);

// Q3. Date.UTC() -//

let utcd = Date.UTC(2021, 2, 30);
console.log(new Date(utcd));

// Q.4 getDate() -//

console.log(new Date('2022-06-08').getDate());

// Q.5 getMonth() -//

console.log(new Date('2022-06-08').getMonth());

// Q.6 getFullYear() -//

console.log(new Date('2022-06-08').getFullYear());

// Q.7 getDay() -//

console.log(new Date().getDay());

// Q.8 getHours() -//

console.log(new Date().getHours());

// Q.9 getMinutes() -//

console.log(new Date('2022-06-08').getMinutes());

// Q.10 getSeconds() -//

console.log(new Date().getSeconds());

// Q.11 getMilliseconds() -//

console.log(new Date().getMilliseconds());

// Q.12 setDate() -//

let sd = new Date().setDate(4);
console.log('Updated Date:', new Date(sd));

// Q.13 setMonth() -//

let sm = new Date().setMonth(7);
console.log('Updated Month:', new Date(sm));

// Q.14 setFullYear() -//

let sfy = new Date().setFullYear(2000);
console.log('Updated Year:', new Date(sfy));

// Q.15 setHours() -//

let sh = new Date().setHours(4);
console.log('Updated Hour:', new Date(sh));

// Q.16 setMinutes() -//

let smi = new Date().setMinutes(40);
console.log('Updated Minutes:', new Date(smi));

// Q.17 setSeconds() -//

let ss = new Date().setSeconds(30);
console.log('Updated Seconds:', new Date(ss));

// Q.18 setMilliseconds() -//

let sms = new Date().setMilliseconds(20);
console.log('Updated Seconds:', new Date(sms));

// Q.19 toDateString() -//

let tds = new Date().toDateString();
console.log(tds)

// Q.20 toLocaleTimeString() -//

let tlds = new Date().toLocaleDateString();
console.log(tlds)

// Q.21 toTimeString() -//

let tts = new Date().toTimeString();
console.log(tts)

// Q.22 toLocaleTimeString() -//

let tlts = new Date().toLocaleTimeString();
console.log(tlts)

           // - UTC Date Methods - \\

//- Q.23 getUTCDate() -//

let gud = new Date().getUTCDate();
console.log(gud)

//- Q.24 getUTCDay() -//

let gudy = new Date().getUTCDay();
console.log(gudy)

//- Q.25 getUTCFullYear() -//

let gufy = new Date().getUTCFullYear();
console.log(gufy)

//- Q.26 getUTCHours() -//

let guh = new Date().getUTCHours();
console.log(guh)

//- Q.27 getUTCMinute() -//

let gum = new Date().getUTCMinutes();
console.log('UTC Minutes :',gum)

//- Q.28 getUTCSeconds() -//

let gus = new Date().getUTCSeconds();
console.log('UTC Seconds :',gus)

//- Q.29 getUTCMilliSeconds() -//

let gums = new Date().getUTCMilliseconds();
console.log('UTC MilliSeconds :',gums)

//- Q.30 setUTCDate() -//

const sud = new Date().setUTCDate(10);
console.log('Updated UTC Date :',new Date,(sud))

//- Q.31 setUTCFullYear() -//

const sUfy = new Date().setUTCFullYear(2000);
console.log('Updated UTC Year :',new Date(sUfy))

//- Q.32 setUTCHours() -//

const sUh = new Date().setUTCHours(10);
console.log('Updated UTC Hours :',new Date,(sUh))

//- Q.33 setUTCMinutes() -//

const sUm = new Date().setUTCMinutes(11)
console.log('Updated UTC Minutes :',new Date(sUm));

//- Q.35 setUTCSeconds() -//

const sUs = new Date().setUTCSeconds(4)
console.log('Updated UTC Seconds :',new Date(sUs));

//- Q.35 setUTCMilliseconds() -//

const sUms = new Date().setUTCMilliseconds(10)
console.log('Updated UTC MilliSeconds :',new Date(sUms));