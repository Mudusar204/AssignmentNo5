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
// 13----> ts program to count total number of notes in given amount
// var amount: number= Number(prompt("type here some amount"))
// var case1 : number =amount/10
// var case2 : number =amount/20
// var case3 : number =amount/50
// var case4 : number =amount/100
// var case5 : number =amount/500
// var case6 : number =amount/1000
// var case7 : number =amount/5000
// if (amount>=0 && amount<=10 && amount%10==0) {
//     console.log(amount,"has", case1, "notes of 10");
// }
// else if (amount>=0 && amount<=20 && (amount%10==0 || amount%20==0)){
//     console.log(amount,"has", case1, "notes of 10");
//     console.log(amount,"has", case2, "notes of 20");
// }
// else if (amount>=20 && amount<=50 && (amount%10==0 && amount%50==0)){
//     console.log(amount,"has", case3, "notes of 50");
//     console.log(amount,"has", case1, "notes of 10");
// }
// else if (amount>=50 && amount<=100 && ( amount%20==0 && amount%50==0 && amount%100==0) ){
//     console.log(amount,"has", case1, "notes of 10");
//     console.log(amount,"has", case2, "notes of 20");
//     console.log(amount,"has", case3, "notes of 50");
//     console.log(amount,"has", case4, "notes of 100");
// }
// else if (amount>=100 && amount<=500 && ( amount%20==0 && amount%50==0 && amount%100==0 && amount%500==0 ) ){
//     console.log(amount,"has", case1, "notes of 10");
//     console.log(amount,"has", case2, "notes of 20");
//     console.log(amount,"has", case3, "notes of 50");
//     console.log(amount,"has", case4, "notes of 100");
//     console.log(amount,"has", case5, "notes of 500");
// }
// else if (amount>=500 && amount<=1000 && ( amount%20==0 && amount%50==0 && amount%100==0 && amount%500==0 && amount%1000==0) ){
//     console.log(amount,"has", case1, "notes of 10");
//     console.log(amount,"has", case2, "notes of 20");
//     console.log(amount,"has", case3, "notes of 50");
//     console.log(amount,"has", case4, "notes of 100");
//     console.log(amount,"has", case5, "notes of 500");
//     console.log(amount,"has", case6, "notes of 1000");
// }
// else if (amount>=1000 &&  ( amount%20==0 && amount%50==0 && amount%100==0 && amount%500==0 && amount%1000==0 && amount%5000==0) ){
//     console.log(amount,"has", case1, "notes of 10");
//     console.log(amount,"has", case2, "notes of 20");
//     console.log(amount,"has", case3, "notes of 50");
//     console.log(amount,"has", case4, "notes of 100");
//     console.log(amount,"has", case5, "notes of 500");
//     console.log(amount,"has", case6, "notes of 1000");
//     console.log(amount,"has", case7, "notes of 5000");
// }
// else {
//     console.log("enter here a valid amount");
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
// 17---> write a program to calculate the roots of quardratic equation
// var a : number = Number(prompt("enter the value of a"))
// var b : number = Number(prompt("enter the value of b"))
// var c : number = Number(prompt("enter the value of c"))
// var nominator: number = Math.sqrt (b*b-4*a*c)
// var denominator : number = 2*a
// var result1 : number = (-b + nominator)/denominator
// var result2: number= (-b - nominator)/denominator
// console.log(result1, "root1");
// console.log(result2, "root2");
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
// 19----> write a program to input marks of 5 subjects and calculate percentage and grade
// var num1: number|null =Number(prompt("type here your Math marks out of 100"))
// var num2: number|null =Number(prompt("type here your Physics marks out of 100"))
// var num3: number|null =Number(prompt("type here your Chemistry marks out of 100"))
// var num4: number|null =Number(prompt("type here your Biology marks out of 100"))
// var num5: number|null =Number(prompt("type here your Computer marks out of 100"))
// var total: number = 500;
// var obtainedMarks:number = num1+num2+num3+num4+num5
// var percentage:number = (obtainedMarks/total) *100
// if (percentage>=90){
//     console.log("you have got grade A");
// }
// else if (percentage>=80 && percentage<=90){
//     console.log("you have got grade B");
// }
// else if (percentage>=70 && percentage<=80){
//     console.log("you have got grade C");
// }
// else if (percentage>=60 && percentage<=70){
//     console.log("you have got grade D");
// }
// else if (percentage>=50 && percentage<=60){
//     console.log("you have got grade E");
// }
// else console.log("you have got gare F");
// 20---> Write a ts program to input basic salary and calculate the gross salary of an employement
// var num : number|null = Number(prompt("type here your basic salary"));
// var HRA1 : number =(num/100)*20
// var DA1 : number =(num/100)*80
// var total1 : number=num+HRA1+DA1
// var HRA2 : number =(num/100)*25
// var DA2 : number =(num/100)*90
// var total2 : number=num+HRA2+DA2
// var HRA3 : number =(num/100)*30
// var DA3 : number =(num/100)*95
// var total3 : number=num+HRA3+DA3
// if (num<=10000){
//     console.log( total1, " is your Gross salary");
// }
//  else if (num<=20000){
//     console.log( total2, " is your Gross salary");
// }
// else if (num>20000){
//     console.log( total3, " is your Gross salary");
// }
// else{
//     console.log("enter a valid digits");
// }
// 21----> write a ts program to input electricity unit charges an dcalculate total electricity bill according to the given Condition
// then add 20% of bill in it
// var inputUnits : number = Number(prompt("enter your total units"))
// var gradeA : number = (inputUnits*0.50) 
// var total1: number = gradeA + (gradeA/100*20)
// var gradeB : number = (inputUnits*0.75) 
// var total2: number = gradeB + (gradeB/100*20)
// var gradeC : number = (inputUnits*1.20) 
// var total3: number = gradeC + (gradeC/100*20)
// var gradeD : number = (inputUnits*1.50) 
// var total4: number = gradeD + (gradeD/100*20)
// if (inputUnits<=50){
//     console.log(total1);
// }
// else if  (inputUnits>=50 && inputUnits<=100){
//     console.log(total2);  
// }
// else if  (inputUnits>=100 && inputUnits<=250){
//     console.log(total3);  
// }
// else if  (inputUnits>=250){
//     console.log(total4);  
// }
// else {
//     console.log("enter a valid units");
// }
