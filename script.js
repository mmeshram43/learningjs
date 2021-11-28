/*
let monthlyPremium = 4000 ; 
let policyTerm = 15 ;
let yeralyContri ;
let totalContri ;
const reutrnRate  = 5 ;

let quoteArray = [];

let name = 'Mayur';
let fullName = " ${name} Meshram ";
console.log(fullName);

*/
// Declarations
const users = ['meshram','niki','lenix','legend','shifu','panda','kate'];
console.log(users);
// 3 element was excluded
const val = users.slice(1,3);
users.splice(1,0,"new");
console.log(users)


// functions

// function logger(item){
//   console.log(item);
// }


// function getOtp(user){
//   if(users.includes(user)){
//     let otp = Math.floor(Math.random()*1000000);
//     logger(user+' Logged in');
//     return otp;
//   }
//   return "Invalid User";
// }

// function calls
// changeHeader('newcomers');

let identity = {
  "Name":"Mayur M",
  "Passcode":"1234",
  "Email":"mme@gmail.com",
  "Activity": function(){
    console.log("Active User");
  
  },
  "SGPA": function(param){
    return param*8.80;
  }

}

identity.Activity();

console.log(identity.SGPA(10));


/*
yeralyContri = 12*monthlyPremium;
totalContri = policyTerm*yeralyContri;

for(let i=1;i<policyTerm;i++){
   let increaseCorpus = 0;
 temp  ={ "year":i,
          "monthlyPaidPremium":monthlyPremium,
          "yearlyContribution":yeralyContri,
          "premiumPaid":i*yeralyContri
        }
    
    quoteArray.push(temp);
}

let quartersInTotalYears = 0;
quartersInTotalYears = policyTerm*12/3;
console.log(quartersInTotalYears);


quoteArray.forEach(element => {
    console.log("Year "+element.year);
    console.log('Monthly Premium '+element.monthlyPaidPremium);
    console.log('Premium Paid in Year '+element.yearlyContribution);
    console.log('Corpus '+element.premiumPaid);
    console.log('-----------------------------------');

});
*/
