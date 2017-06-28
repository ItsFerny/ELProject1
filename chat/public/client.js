

$(document).ready(function() {
var socket = io();

function leadZero (number) {
  return (number < 10) ? '0' + number : number
}

function getTime(timestamp) {
  var t, h, m, s;

  t = new Date(timestamp);
  h = leadZero(t.getHours());
  m = leadZero(t.getMinutes());
  s = leadZero(t.getSeconds());

  return String(h) + ':' + m + ':' + s;
}

function getName() {

  name = window.prompt('Whats yo name man?');
  socket.emit('io:name', name);

  $('#m').focus();
  return name;
}

function loadMessages() {
httpGetAsync('/loadMessages', function(messages) {
  messages = JSON.parse(messages);
  for(var i = 0; i < messages.length; i++) {
    renderMessage(messages[i])
  }
});
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true);
  xmlHttp.send(null);
}


window.onload = function() {
  getName();
  loadMessages();
  console.log('loaded');
}

$('form').submit(function() {
  var msg = $('#m').val();
  console.log('emitting msg: ', msg);
  socket.emit('io:message', msg);
  $('#m').val('');
  $('#m').attr('placeholder', '');

  return false;
});

function scrollToBottom() {
  $(window).scrollTop($('#messages').height());
}

window.onresize = function() {
  scrollToBottom();
}

function renderMessage(message) {
  var msg = JSON.parse(message);
  var html = '<li class=\'row\'>';

  html += '<small class=\'time\'>' + getTime(msg.time) + '</small>';
  html += '<span class=\'name\'>' + msg.name + '</span>';
  html += '<p class=\'msg\'>' + msg.msg + '</p>';
  html += '</li>';
  $('#messages').append(html);
}
socket.on('message', function(msg) {
  console.log('>> ' + msg);
renderMessage(msg);
});
});
