function checkWrapped2Layout() {
  const box = document.querySelector('.quadrakeybox');
  const children = Array.from(box.children);

  box.classList.remove('wrapped-2');

  if (children.length === 0) return;

  const firstRowTop = children[0].offsetTop;
  const firstRowCount = children.filter(child => child.offsetTop === firstRowTop).length;
  const totalRows = new Set(children.map(c => c.offsetTop)).size;

  if (totalRows > 1 && firstRowCount === 2) {
    box.classList.add('wrapped-2');
  }
}

window.addEventListener('load', checkWrapped2Layout);
window.addEventListener('resize', checkWrapped2Layout);
