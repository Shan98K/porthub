const mobileTabs = document.querySelector('.mobile-tabs');

mobileTabs.addEventListener('wheel', (e) => {
  e.preventDefault();

  mobileTabs.scrollTo({
    left: mobileTabs.scrollLeft + e.deltaY,
    behavior: 'smooth'
  });
}, { passive: false });
