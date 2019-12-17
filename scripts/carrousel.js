let ul = null;
let working = false;

function move(direction) {
  if(working) {
    setTimeout(() => move(direction), 100);
    return;
  }
  working = true;
  let inFrame = document.body.querySelector('#carousel .in-frame').getBoundingClientRect();
  let left = ul.getBoundingClientRect().x - inFrame.x;
  let maxLeft = document.body.querySelector('#carousel li:last-child');
  maxLeft = -(maxLeft.offsetLeft + maxLeft.offsetWidth - inFrame.width);
  switch (direction) {
  case 'left':
    left = left - inFrame.width;
    if (left >= maxLeft) {
      ul.style.left = left + 'px';
    }
    break;
  case 'right':
    left = left + inFrame.width;
    if (left <= 0) ul.style.left = left + 'px';
    break;
  }
  setTimeout(() => working = false, 500);
};
ul = document.body.querySelector('#carousel ul');
