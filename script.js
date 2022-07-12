
// var request = new XMLHttpRequest();

// request.open('GET','https://restcountries.com/v3.1/all',true);

// request.send();

// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);

// let asia = data.filter((count) => {
//     return count.region === "Asia";

// });
// console.log(asia);
// }



// var request = new XMLHttpRequest();

// request.open('GET','https://restcountries.com/v3.1/all',true);

// request.send();

// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);

// let countries = data.filter((popu) => {
//     return popu.population < 200000;

// });
// console.log(countries);
// }



// var request = new XMLHttpRequest();

// request.open('GET','https://restcountries.com/v3.1/all',true);

// request.send();

// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);

// let total = data.filter((count) => {

// return (count.currencies === "USD");


// });
//     console.log(total); 
// }




// var request = new XMLHttpRequest();

// request.open('GET','https://restcountries.com/v3.1/all',true);

// request.send();

// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);

// let tot = data.reduce((acc,curr) => {
    
//     return acc+curr.name+ ' ' + ':' + ' ' + curr.population +"\n"
// });
// console.log(tot);
// }




// var request = new XMLHttpRequest();

// request.open('GET','https://restcountries.com/v3.1/all',true);

// request.send();

// request.onload = function(){
//     var data = JSON.parse(request.response);
//     console.log(data);

// data.forEach((hi) => {
//     console.log(`
//     name : ${hi.name}
//     capital : ${hi.capital}
//     flag : ${hi.flag} `)
// })

// }