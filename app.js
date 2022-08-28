// if-else exercise:
// 1----> Write a ts program to find maximum btween two numbers 
// var num1: any = prompt("enter your number1");
// var num2: any = prompt("enter your number2");
// if (num1 > num2) {
//     console.log("num1 is maximum");
// }
// else {
//     console.log("num2 is maximum");
// }
// 2----> ts program to find max b/w three numbers 
// var num1: any =  prompt("enter your number 1");
// var num2: any = prompt ("enter your number 2");
// var num3: any = prompt("enter your number 3");
// if (num1>num2 && num1 > num3) {
//     console.log("num1 is maximum");
// }
// else if (num2>num3 && num2>num1){
//     console.log("num2 is max");
// }
// else {
//     console.log("num3 is maximum");
// }
// 3----> ts program to check +ve -ve and zero number
// var num: any = prompt("type here a number")
// if (num>0){
//     console.log("number is positive");
//     alert("Number is positive");
// }
// else if (num<0){
//     console.log("number is negative");
// }
// else if (num==0) {
//     console.log("number is zero");
// }
//     else {
//         console.log("nuber is neither +ve nor -ve");
//     }
// 4----> ts program to check number is divisible by 5 and 11 or not
// var num:any= prompt ("Type here a Number");
// if (num % 5 == 0 ){
//     console.log("number is divisible by 5");
//  }
//  else if (num % 11 == 0 ){
//      console.log("number is divisible by 11");
// }
// else {
//     console.log("number is not divsile by 5 and 11");
// }
// 5----> ts program to check number is even or odd
// var num:any= prompt ("Type here a Number");
// // if(!isNaN(num)){
//     if (num % 2 == 0 ){
//         console.log("number is even");
//     }
//     else {
//         console.log("number is odd");
// } 
// 6----> ts program to check leap year
// var num1: any = prompt("enter here a year number")
// if (num1%4==0){
//     console.log("year is leap");
// }
// else {
//     console.log("year is not a leap year");
// }
// 7----> ts program to check character is alphabet or not
// var num : any = prompt("write here some character");
// if (num >="a"  && num <= "z" || num >= "A" && num <= "Z")
// {
//     console.log("character is alphabet");
// }
// else {
//     console.log("character is not a alphabet");
// }
// 8----> ts program to check character is vowel or constant
// var num : any = prompt("write here some character");
// if ( (num >="a" && num <= "z" || num >="A" && num <= "Z" )
// && ( num == "a" || num == "e" || num == "i" || num == "o" || num == "u" ||
//  num == "A" || num == "E" || num == "I" || num == "O" || num == "U") )
//  {
//     console.log("character is vowel");
// }
// else{
//     console.log("character is constant");
// }
// 9----> ts program to check character is alphabet digit or special character
// var num : any = prompt("write here some character");
// if (num >="a"  && num <= "z" || num >= "A" && num <= "Z")
// {
//     console.log("character is alphabet");
// }
// else if (num>=-Infinity && num<=+Infinity){
//     console.log("character is a digit");
// }
// else {
//     console.log("character is a special character");
// }
// 10----> ts program to check upercase or lowercase
// var num : any = prompt("write here some character");
// if ( num >= "A" && num <= "Z")
// {
//     console.log("character is upercase alphabet");
// }
// else if (num >="a"  && num <= "z") {
//     console.log("character is lowercase alphabet");
// }
// else {
//     console.log("character is not a aplphabet");
// }
// 11----> ts program to input week numbers and print week days
// var num : any = prompt("type here week number")
// var num1: string = "Monday"
// var num2: string = "Tuesday"
// var num3: string = "Wednesday"
// var num4: string = "Thursday"
// var num5: string = "Friday"
// var num6: string = "Saturday"
// var num7: string = "Sunday"
// if (num==1){
//     console.log(num1);
// }
// else if (num==2){
//     console.log(num2);
// }
// else if (num==3){
//     console.log(num3);
// }
// else if (num==4){
//     console.log(num4);
// }
// else if (num==5){
//     console.log(num5);
// }
// else if (num==6){
//     console.log(num6);
// }
// else if (num==7){
//     console.log(num7);
// }
// else {
//     console.log("this is not a valid number");
// }
// 12----> ts program to input month number and print number of days in that month
// var num : any =prompt("Type here month number")
// var num1 : any = "This is and January has 31 days"
// var num2 : any = "This is and Febraury has 29 days"
// var num3 : any = "This i and March has 31 days"
// var num4 : any = "This is and April has 30 days"
// var num5 : any = "This is and May has 31 days"
// var num6 : any = "This is and June has 30 days"
// var num7 : any = "This is and July has 31 days"
// var num8 : any = "This is and August has 31 days"
// var num9 : any = "This is and September has 30 days"
// var num10 : any = "This is and October has 31 days"
// var num11 : any = "This is and November has 30 days"
// var num12 : any = "This is and December has 31 days"
// if (num == 1){
//     console.log(num1);
// }
// else if   (num == 2){
//     console.log(num2);
// }
// else if   (num == 3){
//     console.log(num3);
// }
// else if   (num == 4){
//     console.log(num4);
// }
// else if   (num == 5){
//     console.log(num5);
// }
// else if   (num == 6){
//     console.log(num6);
// }
// else if   (num == 7){
//     console.log(num7);
// }
// else if   (num == 8){
//     console.log(num8);
// }
// else if   (num == 9){
//     console.log(num9);
// }
// else if   (num == 10){
//     console.log(num10);
// }
// else if   (num == 11){
//     console.log(num11);
// }
// else if   (num == 12){
//     console.log(num12);
// }
// else{
//     console.log("Not a valid number");
// }
// 14----> ts program to input angles of a triangle and check its validity
// var num1 :null|string = prompt("Enter your 1st angle") 
// var angle1 : number = Number(num1)
// var num2 :null|string = prompt("Enter your 2st angle")
// var angle2 : number = Number(num2)
// var num3 :null|string = prompt("Enter your 3rd angle")
// var angle3 : number = Number(num3)
// var sum : null|number = angle1+angle2+angle3
// if (angle1&&angle2 &&angle3!=0 && sum==180)
// {
//     console.log("This is a valid triangle");
// }
// else{
//     console.log("this is not a valid triangle");
// }
// 15----> ts program to input sides of a triangle and check its validity
// var num : string|null = prompt("type here the lenght of side1")
// var side1:number|null= Number(num)
// var num : string|null = prompt("type here the lenght of side2")
// var side2:number|null= Number(num)
// var num : string|null = prompt("type here the lenght of side3")
// var side3:number|null= Number(num)
// if ( side1+side2>side3 && side2+side3>side1 && side1+side3>side2){
//     console.log("this is a valid triangle");
// }
// else{
//     console.log("this is not a valid triangle");
// }
// 16----> ts program to check the triangle is equilateral, isosceles or scalene 
// var num : string|null = prompt("type here the lenght of side1")
// var side1:number= Number(num)
// var num : string|null = prompt("type here the lenght of side2")
// var side2:number= Number(num)
// var num : string|null = prompt("type here the lenght of side3")
// var side3:number= Number(num)
// var num1 :null|string = prompt("Enter your 1st angle") 
// var angle1 : number = Number(num1)
// var num2 :null|string = prompt("Enter your 2st angle")
// var angle2 : number = Number(num2)
// var num3 :null|string = prompt("Enter your 3rd angle")
// var angle3 : number = Number(num3)
// if(side1==side2 && side2==side3 && side1==side3 && angle1==angle2 && angle2==angle3 && angle1==angle3&&
//     side1!=0 && side2!=0 &&side3!=0 &&angle1!=0 &&angle2!=0 &&angle3 !=0
//     ){
//     console.log("this is an equilateral triangle");
// }
// else if ((side1==side2 || side2==side3 || side1==side3) && (angle1==angle2 || angle2==angle3 || angle1==angle3)&&(
//     side1!=0 && side2!=0 &&side3!=0 &&angle1!=0 &&angle2!=0 &&angle3 !=0)
//     ){
//     console.log("this an isosceles triangle");
// }
// else if(side1!=side2 && side2!=side3 && side1!=side3 && angle1!=angle2 && angle2!=angle3 && angle1!=angle3&&
//     side1!=0 && side2!=0 &&side3!=0 &&angle1!=0 &&angle2!=0 &&angle3 !=0
//     ){
//     console.log("this a scalene triangle");
// }
// else  {console.log("this is not a triangle");
// }
// 18----> write a program to calculate profit and loss
// var num1:string|null = prompt("type here your cost")
// var cost : number = Number(num1)
// var num2:string|null = prompt("type here your sell price")
// var sale : number = Number(num2)
// var profit:number= sale-cost
// var loss: number= cost-sale
// if(sale>cost){
//     console.log(profit, "Is profit");
// }
// else if (sale<cost){
//     console.log(loss,"Is loss");
// }
// else{
//     console.log("there is no profit and loss");
// }
// 18----> write a program to calculate profit and loss
