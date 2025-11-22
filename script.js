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

const heading=document.createElement("h1");
const division=document.createElement("div");
const paragraph=document.createElement("p");
const breakTag=document.createElement("br");

heading.innerHTML="Hello WOrld";
paragraph.innerText="I am FIne";


division.setAttribute("id","main");
paragraph.setAttribute("style","color:blue;font-size:30px;text-align:center;")
heading.classList.add("text-center","text-purple-500")

division.append(heading,breakTag,paragraph)
document.body.appendChild(division)