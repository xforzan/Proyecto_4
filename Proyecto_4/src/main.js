import './style.css'
import { Header, header } from '../Components/Header/header.js';
import { introduction } from '../Pages/Introduction/introduction.js';
import { aboutMe } from '../Pages/AboutMe/aboutMe.js';
import { experience } from '../Pages/Experience/experience.js';
import { myProjects } from '../Pages/MyProjects/myProjects.js';
import { footer } from '../Components/Footer/footer.js';
import { changeId } from '../Utils/changeId.js';

header();
// experience();
// myProjects();
// footer();


const body = document.querySelector('#app');

body.innerHTML = `
${introduction()}
${aboutMe()}
`
const themeButton = document.querySelector('.themeButton');
const aboutMeBtn = document.querySelector('#aboutMe');
const contact = document.querySelector('#contact')
const socialMedia = document.querySelector('.socialMedia')


themeButton.addEventListener('click', () => {
    if (themeButton.id === 'darkTheme') {
    changeId('#darkTheme', 'lightTheme')
    document.body.classList.add('light')
    Header.classList.add('light')
    aboutMeBtn.id = aboutMeBtn.id.replace('aboutMe','aboutMeLight')
    contact.id = contact.id.replace('contact', 'contactLight')
    socialMedia.classList.add('darkIcons')
    
}else {
    changeId('#lightTheme', 'darkTheme')
    document.body.classList.remove('light')
    Header.classList.remove('light')
    aboutMeBtn.classList.remove('aboutMeLight')
    aboutMeBtn.id = aboutMeBtn.id.replace('aboutMeLight', 'aboutMe')
    contact.id = contact.id.replace('contactLight', 'contact')
    socialMedia.classList.remove('darkIcons')
}

});




aboutMeBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 450,
        behavior: 'smooth'
    })
});