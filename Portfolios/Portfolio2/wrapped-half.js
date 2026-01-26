function checkWrappedHalfLayout() {
  const box = document.querySelector('.doublehashes'); // ⬅️ changed
  const children = Array.from(box.children);

  box.classList.remove('wrapped-half');

  if (children.length === 0) return;

  const firstRowTop = children[0].offsetTop;
  const firstRowCount = children.filter(child => child.offsetTop === firstRowTop).length;
  const totalRows = new Set(children.map(c => c.offsetTop)).size;

  if (totalRows > 1 && firstRowCount === 1) {
    box.classList.add('wrapped-half');
  }
}

window.addEventListener('load', checkWrappedHalfLayout);
window.addEventListener('resize', checkWrappedHalfLayout);
