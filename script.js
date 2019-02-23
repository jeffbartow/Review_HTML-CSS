/*
var n=1;
alert(n);
var n=1+2;
alert(n);
var n=1+5/2;
alert(n);
var z=2*n;
alert(z);
*/

/*
var s="hi "
alert(s);
var t="Jeff";
var w=s+t;
alert(w);
*/

/*
var a=5+t;
alert(a);
var b=a*3;
alert(b);
*/

/*
function add(n1,n2){
    return n1+n2;
}
var s= add(1,2);
alert(s);
*/

/*
var myName="Jeff Bartow";
var names=myName.split(" ");
alert(names);
console.log(names);

console.log(names[0]);
console.log(names.join("-"));
*/

var paragraph=document.createElement('p');
paragraph.innerText= "Hi from Jeff";
//<p> hi from Jeff </p>
document.querySelector("body").appendChild(paragraph);
