const toggleBtnSame = document.querySelector('.toggle-Button');
const siteContent = document.querySelector('.page-Content');

toggleBtnSame.addEventListener('click', () => {
    toggleBtnSame.style.display = 'none';
    siteContent.style.display = 'flex';
});