import './style.css'
import { Header, header } from '../Components/Header/header.js';
import { introduction } from '../Pages/Introduction/introduction.js';
import { aboutMe } from '../Pages/AboutMe/aboutMe.js';
import { experience } from '../Pages/Experience/experience.js';
import { myProjects } from '../Pages/MyProjects/myProjects.js';
import { footer } from '../Components/Footer/footer.js';
import { changeId } from '../Utils/changeId.js';

header();
footer();

const body = document.querySelector('#app');

body.innerHTML = `
${introduction()}
${aboutMe()}
${experience()}
${myProjects()}
`
const themeButton = document.querySelector('.themeButton');

themeButton.addEventListener('click', () => {
    if (themeButton.id === 'darkTheme') {
    changeId('#darkTheme', 'lightTheme')
    document.body.classList.add('light')
    Header.classList.add('light')
}else {
    changeId('#lightTheme', 'darkTheme')
    document.body.classList.remove('light')
    Header.classList.remove('light')
}

});


const aboutMeBtn = document.querySelector('#aboutMe');

aboutMeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 450,
        behavior: 'smooth'
    })
});