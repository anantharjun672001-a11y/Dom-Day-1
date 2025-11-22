//Step 1: Creating a html Element
//syntax : let/const variablename = document.createElement("Elementname/htmltag")
//Step 2: Adding the content (innerHTML & innerText)
// syntax: variablename.innerHTML / innerText = "Content"
//Step 3: Attribute (SetAttribute / GetAttribute)
// syntax: varibalename.setAttribute("attributename","attributevalue") 
//example : heading.setAttribute("id","head")
//example : heading.setAttribute("class","head")
//heading.classlist.add("text-center","text-2xl")
//heading.classlist.remove("text-center")
//Step 4:- Appending the element to html document (append & appendchild)
//syntax: document.body.append(variablename)
//syntax: variablename.appendchild(variablename)

//Example : Creating Single element

/* const heading=document.createElement("h1")
heading.innerHTML="<i>Hello World</i>"
document.body.append(heading) */

//Example : Creating Multiple elements

/* const heading=document.createElement("h1")
const division=document.createElement("div")
const paragraph=document.createElement("p")

heading.innerHTML="<i>Hello World</i>";
paragraph.innerText="DOM CONTENT";

division.append(heading,paragraph)
document.body.appendChild(division) */

//Example : Creating Multiple elements with setAttributes

/* const heading=document.createElement("h1");
const division=document.createElement("div");
const paragraph=document.createElement("p");
const breakTag=document.createElement("br");

heading.innerHTML="Hello WOrld";
paragraph.innerText="I am FIne";


division.setAttribute("id","main");
paragraph.setAttribute("style","color:blue;font-size:30px;text-align:center;")
heading.classList.add("text-center","text-purple-500")

division.append(heading,breakTag,paragraph)
document.body.appendChild(division) */

//Example: Session Task

/* const heading=document.createElement("h1")
const heading1=document.createElement("h1")
const header=document.createElement("header")
const navBar=document.createElement("nav")
const unorder=document.createElement("ul")
const list1=document.createElement("li")
const list2=document.createElement("li")
const list3=document.createElement("li")
const main=document.createElement("main")
const sectionPart=document.createElement("section")

heading.innerHTML="<i>Creating Multiple Element</i>"
list1.innerText="About"
list2.innerText="Pricing"
list3.innerText="Contact"
heading1.innerHTML="<i>Above all are Dynamically</i>"


heading.classList.add("text-center","text-3xl","text-red-700")
heading1.classList.add("text-center","text-3xl","text-red-700")
unorder.classList.add("flex", "justify-center","space-evenly", "gap-8")
list1.classList.add("list-none","text-black","cursor-pointer")
list2.classList.add("list-none","text-black","cursor-pointer")
list3.classList.add("list-none","text-black","cursor-pointer")

unorder.append(list1,list2,list3)
navBar.appendChild(unorder)
header.appendChild(navBar)
sectionPart.appendChild(heading1)
main.appendChild(sectionPart)
document.body.append(heading,header,main) */


//creating multiple elements dynamically

/* function dynamic(tagname,content,attrname,attrvalue){
        const ele =document.createElement(tagname);
        ele.innerHTML = content;
        ele.setAttribute(attrname,attrvalue);
        return ele;
}

const heading = dynamic("h1","Dynamic Creation","class","head");

document.body.append(heading);

 

//Get Element By Id :-
const res = document.getElementById("head")
res.innerText="Hi"
console.log(res)

*/

//Get Element By Class ;-

/* const res = document.getElementsByClassName("container")
console.log(res)
 */

//Get Element By Tagname:-

/* const res = document.getElementsByTagName("div")
console.log(res);
 */

// Get ELement by queryselector:-

/* const res=document.querySelector("#head")
console.log(res); */

// Get Element By queryselectorall

const res=document.querySelectorAll(".container")
console.log(res);


