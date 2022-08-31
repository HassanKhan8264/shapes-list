var dom = document.getElementById("dom")




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



var body = document.createElement("div")
body.setAttribute("id", "body")

body.appendChild(round)
body.appendChild(tAngle)
body.appendChild(sQuare)
body.appendChild(rAngle)



function Plans(name,price,space,transfer,pages){
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
} 

var basic = new Plans("basic", 100, "100gbs", "56mb/sec", 2)
var adv = new Plans("adv", 300, "200gbs", "30mb/sec", 6)
var ultra = new Plans("utlra", 500, "400gbs", "20mb/sec", 10)
var pro = new Plans("pro", 1000, "700gbs", "16mb/sec", 20)

var body2 = document.createElement("div")
body2.setAttribute("id", "body2")

var basicDiv = document.createElement("div")
basicDiv.setAttribute("class", "basic")

var advDiv = document.createElement("div")
advDiv.setAttribute("class", "adv")


var ultraDiv = document.createElement("div")
ultraDiv.setAttribute("class", "ultra")


var proDiv = document.createElement("div")
proDiv.setAttribute("class", "pro")



body2.appendChild(basicDiv)
body2.appendChild(advDiv)
body2.appendChild(ultraDiv)
body2.appendChild(proDiv)


for(var key in basic){
    var para = document.createElement("p")
    var text = document.createTextNode(key)
    var span = document.createElement("span")
    var value = document.createTextNode(":"+ basic[key])
    span.appendChild(value)
    para.appendChild(text)
    para.appendChild(span)
    basicDiv.appendChild(para)
}


for(var key2 in adv){
    var para2 = document.createElement("p")
    var text2 = document.createTextNode(key2)
    var span2 = document.createElement("span")
    var value2 = document.createTextNode(":"+ adv[key2])
    span2.appendChild(value2)
    para2.appendChild(text2)
    para2.appendChild(span2)
    advDiv.appendChild(para2)
}

for(var key3 in ultra){
    var para3 = document.createElement("p")
    var text3 = document.createTextNode(key3)
    var span3 = document.createElement("span")
    var value3 = document.createTextNode(":"+ ultra[key3])
    span3.appendChild(value3)
    para3.appendChild(text3)
    para3.appendChild(span3)
    ultraDiv.appendChild(para3)
}

for(var key4 in pro){
    var para4 = document.createElement("p")
    var text4 = document.createTextNode(key4)
    var span4 = document.createElement("span")
    var value4 = document.createTextNode(":"+ pro[key4])
    span4.appendChild(value4)
    para4.appendChild(text4)
    para4.appendChild(span4)
    proDiv.appendChild(para4)
}

var button = document.createElement("button")
var btnText = document.createTextNode("shapes")
button.appendChild(btnText)
button.setAttribute("onclick", "shapes()")

function shapes(){
    body.style.display = "flex";
}

var button2 = document.createElement("button")
var pakText = document.createTextNode("packages")
button2.appendChild(pakText)
button2.setAttribute("onclick", "packages()")

function shapes(){
    body.style.display = "flex";
}
function packages(){
    body2.style.display = "flex";
}


dom.appendChild(button)
dom.appendChild(button2)
dom.appendChild(body)
dom.appendChild(body2)
