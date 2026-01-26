function toggle2Para() {
    document.querySelector('.paraBtn').style.display = 'none';
    document.querySelector('.paraAbout').style.display = 'flex';
    document.querySelector('.paraAboutMe').style.display = 'block';
}

function toggle2Btn() {
    document.querySelector('.paraAbout').style.display = 'none';
    document.querySelector('.paraBtn').style.display = 'flex';
    document.querySelector('.paraAboutMe').style.display = 'flex';
}