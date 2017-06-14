var submitName = function() {
var name = document.getElementById("nameInput").value;
console.log(name);
var nameBox = document.getElementById("names");
var node = document.createElement("DIV");
var textNode = document.createTextNode(name);
node.appendChild(textNode);
nameBox.appendChild(node);
document.getElementById("nameInput").value = "";
}
