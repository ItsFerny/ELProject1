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
function changeText(){
var check = document.getElementById("checkbox").checked;
var node = document.getElementById("gpu");
if (check){
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
  var textNode = document.createTextNode("Enabled");
  node.appendChild(textNode);
      } else {
        while (node.firstChild) {
          node.removeChild(node.firstChild);
        }
    var textNode = document.createTextNode("Disabled");
    node.appendChild(textNode);

  }
console.log(check);
}
