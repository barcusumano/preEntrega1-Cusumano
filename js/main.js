// Name prompt
let fullName = prompt("Welcome to our yoga course website! Please enter your full name:");

// Age prompt 
let age;
function askForAge() {
  do {
    age = prompt("How old are you?:");
  } while (isNaN(age) || age === "");

  return parseInt(age);
}
askForAge ()

// Course price
let teenCoursePrice = 500;
let adultCoursePrice = 700;

//Price difference
let result = 0;
function priceDif(a, b) {
  result = a - b;
}
priceDif (adultCoursePrice, teenCoursePrice)


// Email Prompt
let email = prompt("Please enter your email address:");
let confirmEmail = prompt("Please confirm your email address:");



// Email verification
if (email === confirmEmail) 
  // age groups
  if (age <10 || age >40) {
    alert("Sorry, there are no courses available for your age group.");
  } 
  else if (age >= 10 && age <= 18) {
    let yesPlease = prompt("Hello " +fullName+", you are eligible for our Teen Yoga Course. Would you like to know the price? (yes/no)");
    if (yesPlease.toLowerCase() === "yes") {
      let payment = 0;
      while (payment < teenCoursePrice) {
        payment = parseFloat ( prompt("Thank you for your interest, " +fullName+ "! The price of the Teen Yoga Course is " +teenCoursePrice+ " euros and it's " +result+ " euros cheaper than the Adult's course. How much money are you going to pay?"));
        if (payment > teenCoursePrice) {
          let change = payment - teenCoursePrice;
          alert("Thank you, " +fullName+ "! Your payment of " +payment+ "euros has been received. Your change is " +change+ "euros. See you soon!");
        } else if (payment == teenCoursePrice) {
          alert("Thank you," +fullName+ "! You have entered the exact amount. See you soon!") 
        } else {
          let remainingAmount = teenCoursePrice - payment;
          alert("Sorry, "+fullName+". The amount you entered is not enough by a difference of "+remainingAmount+". Please enter an amount equal or higher than the course price");
        }
      }
    } else {
      alert("Nevermind then. Thank you for visiting our website. Have a great day!");
    }

  }else {
    let yesPlease = prompt("Hello, "+fullName+ " you are eligible for our Adult Yoga Course. Would you like to know the price? (yes/no)");
    if (yesPlease.toLowerCase() === "yes") {
      let payment = 0;
      while (payment < adultCoursePrice) {
        payment = parseFloat ( prompt("Thank you for your interest, " +fullName+ "! The price of the Adult Yoga Course is " +adultCoursePrice+ " euros and it's " +result+ " euros more expensive than the Teen's course. How much money are you going to pay?"));
        if (payment > adultCoursePrice) {
          let change = payment - adultCoursePrice;
          alert("Thank you, " +fullName+ "! Your payment of " +payment+ "euros has been received. Your change is " +change+ "euros. See you soon!");
        } else if (payment == adultCoursePrice) {
          alert("Thank you," +fullName+ "! You have entered the exact amount. See you soon!") 
        } else {
          let remainingAmount = adultCoursePrice - payment;
          alert("Sorry, "+fullName+". The amount you entered is not enough by a difference of "+remainingAmount+". Please enter an amount equal or higher than the course price");
        }
      }
    } else {
      alert("Nevermind then. Thank you for visiting our website. Have a great day!");
    }
} else {
  alert("Emails don't match");}

