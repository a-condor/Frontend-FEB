//onload
function greeting() { alert("Hi there, Nice to Meet You!");}

//onclick
function knowMe() { alert("Feel free to explore my portfolio!");}

//onmouseover and onmouseout
function facebook() { document.getElementById("pages").innerText = "...you'll be redirected to my facebook page";}
function twitter() { document.getElementById("pages").innerText = "...you'll be redirected to my twitter handle";}
function codepen() { document.getElementById("pages").innerText = "...you'll be redirected to my CodePen page";}
function gitHub() { document.getElementById("pages").innerText = "...you'll be redirected to my Git Hub page";}
function pages() { document.getElementById("pages").innerText = "...click on any below to view my pages";}
function page() { document.getElementById("pages").innerText = "My Pages...";}

//hover image
function hoverImage() {document.getElementsByTagName("p")[1].innerHTML = "@UNILAG-2018";}
function outImage() {document.getElementsByTagName("p")[1].innerHTML = "";}

//menu icon
function menuHide() { document.getElementsByClassName("c")[0].innerText = "" }
function menuShow() { document.location.reload();}

// enter only alphabets for name input
function alphabets(event) {
    var key = event.keyCode;
    var keys = (key >= 65 && key <= 90) || key == 8 || key == 32 || key == 16;
    return keys; }

//reset form
function reset(){
name = ""; email = ""; message = "";}

//submit form
function submitMe(){
var name = document.getElementsByTagName("input")[0].value;
var email = document.getElementsByTagName("input")[1].value;
var message = document.querySelector("textarea").value;

if (name === ""){ alert("Please enter your name!");}
else if (email === ""){ alert("Please enter your Email!");}
else if (message === ""){ alert("Please enter your message!");}
else if (email.includes("@") == false) {alert ("You've entered an invalid Email address!")}
else if (email.includes(".") == false) {alert ("You've entered an invalid Email address!")}
else { 
var table = document.querySelector("table");
var row = table.insertRow(1);

var newName = row.insertCell(0);
var newEmail = row.insertCell(1);
var newMessage = row.insertCell(2);

newName.innerHTML = document.getElementsByTagName("input")[0].value ;
newEmail.innerHTML = document.getElementsByTagName("input")[1].value;
newMessage.innerHTML = document.querySelector("textarea").value;
  
alert(" Your submission was successful " + name + " " + ".")}  
}