var dom = document.getElementById("dom")

// body
var body = document.createElement("div")
body.setAttribute("id", "body")

// body2
var body2 = document.createElement("div")
body2.setAttribute("id", "body2")


// body3
var body3 = document.createElement("div")
body3.setAttribute("id", "body3")


// shapes
var circle = document.createElement("div")
circle.setAttribute("class", "circle")
var text1 = document.createTextNode("circle")
circle.appendChild(text1)

var round = circle;


var triAngle = document.createElement("div")
triAngle.setAttribute("class", "triangle")
var text2 = document.createTextNode("TriAngle")
triAngle.appendChild(text2)

var tAngle = triAngle;


var square = document.createElement("div")
square.setAttribute("class", "square")
var text3 = document.createTextNode("Square")
square.appendChild(text3)

var sQuare = square;

var rectAngle = document.createElement("div")
rectAngle.setAttribute("class", "rectangle")
var text4 = document.createTextNode("rectAngle")
rectAngle.appendChild(text4)

var rAngle = rectAngle;




body.appendChild(round)
body.appendChild(tAngle)
body.appendChild(sQuare)
body.appendChild(rAngle)


// employees
function Plans(name,father,email,address,designation,experience,salary){
    this.name = name;
    this.father = father;
    this.email = email;
    this.address = address;
    this.designation = designation;
    this.experience = experience;
    this.salary = salary;
} 

var e1 = new Plans("Taha","Hassan","tahahassan@gmail.com","johar, block 20","employee","6 months","25000")
var e2 = new Plans("Taha","Hassan","tahahassan@gmail.com","johar, block 20","employee","6 months","25000")
var e3 = new Plans("Taha","Hassan","tahahassan@gmail.com","johar, block 20","employee","6 months","25000")
var e4 = new Plans("Taha","Hassan","tahahassan@gmail.com","johar, block 20","employee","6 months","25000")


var e1Div = document.createElement("div")
e1Div.setAttribute("class", "e1")

var e2Div = document.createElement("div")
e2Div.setAttribute("class", "e2")


var e3Div = document.createElement("div")
e3Div.setAttribute("class", "e3")


var e4Div = document.createElement("div")
e4Div.setAttribute("class", "e4")



body2.appendChild(e1Div)
body2.appendChild(e2Div)
body2.appendChild(e3Div)
body2.appendChild(e4Div)


for(var key in e1){
    var para = document.createElement("p")
    var text = document.createTextNode(key)
    var span = document.createElement("span")
    var value = document.createTextNode(":"+ e1[key])
    span.appendChild(value)
    para.appendChild(text)
    para.appendChild(span)
    e1Div.appendChild(para)
}


for(var key2 in e2){
    var para2 = document.createElement("p")
    var text2 = document.createTextNode(key2)
    var span2 = document.createElement("span")
    var value2 = document.createTextNode(":"+ e2[key2])
    span2.appendChild(value2)
    para2.appendChild(text2)
    para2.appendChild(span2)
    e2Div.appendChild(para2)
}

for(var key3 in e3){
    var para3 = document.createElement("p")
    var text3 = document.createTextNode(key3)
    var span3 = document.createElement("span")
    var value3 = document.createTextNode(":"+ e3[key3])
    span3.appendChild(value3)
    para3.appendChild(text3)
    para3.appendChild(span3)
    e3Div.appendChild(para3)
}

for(var key4 in e4){
    var para4 = document.createElement("p")
    var text4 = document.createTextNode(key4)
    var span4 = document.createElement("span")
    var value4 = document.createTextNode(":"+ e4[key4])
    span4.appendChild(value4)
    para4.appendChild(text4)
    para4.appendChild(span4)
    e4Div.appendChild(para4)
}



// menu
var heading = document.createElement("h1")
var headText = document.createTextNode("Resturaunt Menu")
heading.appendChild(headText)
body3.appendChild(heading)

var heading = document.createElement("h1")
var headText = document.createTextNode("Basic")
heading.appendChild(headText)
body3.appendChild(heading)

function Menu(Type,Size,category,price,){
    this.Type = Type;
    this.Size = Size;
    this.category = category;
    this.price = price;
}

var cat1 = new Menu("Burger"," Small Burger","chees burger","500")
var cat2 = new Menu("Burger"," Premium Burger","Beef chees burger","800")
var cat3 = new Menu("Burger"," Big Burger","Beef steak burger","1200")

for(var item in cat1){
    var h1 = document.createElement("h2")
    var h1Text = document.createTextNode(item)
    var mValue = document.createTextNode(":"+ cat1[item])
    h1.appendChild(h1Text)
    h1.appendChild(mValue)
    body3.appendChild(h1)
}
var heading = document.createElement("h1")
var headText = document.createTextNode("Premium")
heading.appendChild(headText)
body3.appendChild(heading)

for(var item2 in cat2){
    var h1 = document.createElement("h2")
    var h1Text = document.createTextNode(item2)
    var mValue = document.createTextNode(":"+ cat2[item2])
    h1.appendChild(h1Text)
    h1.appendChild(mValue)
    body3.appendChild(h1)
}

var heading = document.createElement("h1")
var headText = document.createTextNode("Big")
heading.appendChild(headText)
body3.appendChild(heading)

for(var item3 in cat3){
    var h1 = document.createElement("h2")
    var h1Text = document.createTextNode(item3)
    var mValue = document.createTextNode(":"+ cat3[item3])
    h1.appendChild(h1Text)
    h1.appendChild(mValue)
    body3.appendChild(h1)
}


// button  shapes
var button = document.createElement("button")
var btnText = document.createTextNode("shapes")
button.appendChild(btnText)
button.setAttribute("onclick", "shapes()")


// button  employees
var button2 = document.createElement("button")
var eText = document.createTextNode("Employees")
button2.appendChild(eText)
button2.setAttribute("onclick", "employees()")

// button  menu
var button3 = document.createElement("button")
var menuText = document.createTextNode("menu")
button3.appendChild(menuText)
button3.setAttribute("onclick", "menu()")


function shapes(){
    body.style.display = "flex";
}

function employees(){
    body2.style.display = "flex";
}

function menu(){
    body3.style.display = "block";
}



dom.appendChild(button)
dom.appendChild(button2)
dom.appendChild(button3)

dom.appendChild(body)
dom.appendChild(body2)
dom.appendChild(body3)
