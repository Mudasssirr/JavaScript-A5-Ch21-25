//Chaoter 21-25

//Question 1
// var firstName = prompt("Type your first name");
// var lastName = prompt("Type your last name");
// var fullName = firstName + " " + lastName;
// alert("Hello," + " " + "Mr." + " " + fullName);

//Question 2
// var fvrtPhne = prompt("Your favourite mobile phone model");
// document.write("My favourite phone is: " + fvrtPhne);
// document.write("Length of string: " + fvrtPhne.length);

//Question 3
// var CntryName = "Pakistani";
// var index = CntryName.indexOf("n");
// document.write("String: Pakistani ");
// document.write("Index of 'n' " + index);

//Question 4
// var greeting = "Hello World";
// var index2 = greeting.lastIndexOf("l");
// document.write("String: Hello World") ;
// document.write("Last index of 'l': " + index2);

//Question 5
// var CntryName2 = "Pakistani";
// var index3 = CntryName2[3];
// document.write("String: Pakistani");
// document.write("Character at index 3:" + index3);

//Question 6 --- Done in Q1

//Question 7
// var city = "Hyderabad";
// var replace = city.replace('Hyder', 'Islam');
// document.write("City: Hyderabad");
// document.write("After replacement: " + replace);

//Question 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replace2 = message.replaceAll('and', '&');
// document.write(replace2);

//Question 9
// var str = "472";
// var num = +"472";
// document.write("Value: " + str);
// document.write("Type: " + typeof(str));
// document.write("Value: " + num);
// document.write("Type: " + typeof(num));

//Question 10
// var userInput = prompt("Your Input");
// var upperCase = userInput.toUpperCase();
// document.write("User Input: " + userInput);
// document.write("Upper Case: " + upperCase);

//Question 11
// var userInput2 = prompt("Your Input");
// var capitalize = userInput2[0].toUpperCase() + userInput2.slice(1);
// document.write("User Input: " + userInput2);
// document.write("Title Case: " + capitalize);

//Question 12
// var num = 35.36;
// var str2 = num.toString() * 100;
// document.write("Number: " + num);
// document.write("Result: " + str2);

//Question 13 ---
// let username = prompt("Enter your username:");
// if (username.includes('@') || username.includes('.') || username.includes(',') || username.includes('!')) {
//   prompt("Please enter a valid username. The following characters are not allowed: @ . , !");
// } else {
//   alert("Username entered: " + username);
// }

//Question 14 ---
// var userInput3 = prompt("Welcome to ABC Bakery, What do you want to order sir/ma'am?");
// var userInputSmall = userInput3.toLowerCase();
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var found = false;
// for(var i = 0; i <= A.length; i++){
//     if(userInputSmall === A[i]){
//     found = true;
//     break;}
// }
// if(found === true){
//     alert(userInput3 + " is available at index " + A[userInput3] + " in our bakery");
// }else{
//     alert("We are sorry. " + userInput3 + " is not available in our bakery");
// }

//Question 15 ---
// var password = prompt("Please enter your password:");
//   if (password.length > 6) {
//     alert("Password should be at least 6 characters long!");
//   } else if (/^\d/.test(password)) {
//     alert("Password should not start with a number!");
//   } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
//     alert("Password should contain both alphabets and numbers!");
//   } else {
//     alert("Valid password!");
// }

//Question 16 ---
// var university = "University of Karachi";
// var split = university.split("");
// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }

//Question 17 ---
// var userInput4 = prompt("Enter your input");
// var lastCharacter = userInput4.charAt(userInput4.length - 1);
// document.write("The last character of the input: " + lastCharacter);

//Question 18 ---
// var str = "The quick brown fox jumps over the lazy dog";
// var findThe = str.toLowerCase().split("the").length - 1;
// document.write("Text: The quick brown fox jumps over the lazy dog" + "<br />");
// document.write("There are " + findThe + " occurence(s) of the word 'the'");