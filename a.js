function Check()
{
var c=0;
var Q1=document.Quiz.Question1. value;
var Q2=document.Quiz.Question2. value;
var Q3=document.Quiz.Question3. value;
var Q4=document.Quiz.Question4. value;
var Q5=document.Quiz.Question5. value;
var Q6=document.Quiz.Question6. value;
var Q7=document.Quiz.Question7. value;
var Q8=document.Quiz.Question8. value;
var Q9=document.Quiz.Question9. value;
var Q10=document.Quiz.Question10. value;

if(Q1=="Object-based")
{c++;}

if(Q2=="Immediate if")
{c++;}

if(Q3=="All of the mentioned")
{c++;}

if(Q4=="Function/method")
{c++;}

if(Q5=="Allows Javascript code to alter the behaviour of windows")
{c++;}

if(Q6=="Division by zero")
{c++;}

if(Q7=="?")
{c++;}

if(Q8=="!=")
{c++;}

if(Q9=="//")
{c++;}

if(Q10=="All of the above")
{c++;}
document.write(`<h1>Your score ${c} out of 10</h1>`);
if(c<6)
{
document.write("Try to work hard");
}
else
{
document.write("Awesome. You qualified for the next round");
}
}