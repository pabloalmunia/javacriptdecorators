function horizontalResizer(resizer, left, right) {
  resizer.addEventListener('mousedown', initResize, false);

  function initResize(e) {
    window.addEventListener('mousemove', Resize, false);
    window.addEventListener('mouseup', stopResize, false);
  }

  function Resize(e) {
    resizer.style.left = (e.clientX - 3) + 'px';
    left.style.width = (e.clientX - 1) + 'px';
    right.style.left = (e.clientX + 1) + 'px';
  }

  function stopResize(e) {
    window.removeEventListener('mousemove', Resize, false);
    window.removeEventListener('mouseup', stopResize, false);
  }
}
