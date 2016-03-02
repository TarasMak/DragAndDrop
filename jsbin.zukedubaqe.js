var blocks = document.querySelectorAll('.block');
for (var i=0; i < blocks.length; i++) {
  blocks[i].addEventListener('mousedown', dragStart, false);
}
document.addEventListener('mousemove', drag, false);
document.addEventListener('mouseup', dragEnd, false);
document.addEventListener('selectstart', handler, false);
document.addEventListener('dragstart', handler, false);

var dragObject;
var dragOffsetX = 0;
var dragOffsetY = 0;

function dragStart(event) {
  event = event || window.event;
  dragObject = event.target || event.srcElement;
  dragOffsetX = event.offsetX;
  dragOffsetY = event.offsetY;
}

function drag(event) {
  event = event || window.event;
  if (dragObject) {
    dragObject.style.top = event.pageY - dragOffsetY + 'px';
    dragObject.style.left = event.pageX - dragOffsetX + 'px';
  }
}

function dragEnd(event) {
  event = event || window.event;
  dragObject = null;
  dragOffsetX = 0;
  dragOffsetY = 0;
}

function handler(event) {
  return false;
}