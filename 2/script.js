
// let car = {
//     name: prompt("Nomini kiriting:"),
//     ega: prompt("yilini kiriting:"),
//     rangimbor: prompt("Rangini kiriting:"),
//     probeg: prompt('Probegini kiriting'),
//     xolat: prompt("Xolati qanday:"),
//     narxi: prompt("Narxini kiriting:"),
// }

// console.log(car);
// function jentra(probeg){
//     if (probeg <= 60000){
//         alert("SOTIB OLAMAN")}
//     else if(probeg >= 60000){
//         alert("A yooo yoqmadi")}
//     }
// jentra(probeg)  

// let s1 = {
//     name: 'Sanjar',
//     surname: 'kadirov',
//     ega: 20,
//     rangimbor: "qobqora"
// }
// console.log(s1);
// let s2 = {
//     name: 'Sohibjon',
//     surname: 'Bilmiyman',
//     ega: 20,
//     rangimbor: "Bug'doy rang"
// }
// console.log(s2);
// let s3 = {
//     name: 'Sanjar',
//     surname: 'Omonov',
//     ega: 19,
//     rangimbor: "bug'doy rang"
// }
// console.log(s3);
// let s4 = {
//     name: 'Sanjar',
//     surname: 'Omonov',
//     ega: 19,
//     rangimbor: "bug'doy rang"
// }
// console.log(s4);

// function car(brand,year,color,many){
//     this.brand = brand,
//     this.year = year,
//     this.color = color,
//     this.many = many
// }
// let BMW = new car('BMW x7',2018,'Grey',"120.000$");
// let MERS = new car("Mersedes-Benz e220",2017,"Black","33.000$");

// console.log(BMW);
// console.log(MERS);

// function phone(brand,year,color){
//     this.brand = brand,
//     this.year = year,
//     this.color = color,
//     this.many = many
// }
// let Iphone = new phone('Iphone Xs',2018,'Grey',"1.000$");
// let Samsung = new phone("Samsung s20",2020,"Black","1.500$");

// console.log(Iphone);
// console.log(Samsung);

// let yosh = prompt('Yoshingizni yozing');
// let pensiya = 65;
// console.log(pensiya - yosh + " лет осталось до пенсии");
var a = 0 

console.log(tasbeh);
function da() {
    let tasbeh = document.getElementById('tasbeh');


    a++;
    tasbeh.innerHTML = a;
    console.log(a);
    if (a == 33) {
        a = 0
    } 
}
da()

