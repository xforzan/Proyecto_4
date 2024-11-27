import './style.css'
import { header } from '../Components/Header/header.js';
import { introduction } from '../Pages/Introduction/introduction.js';
import { aboutMe } from '../Pages/AboutMe/aboutMe.js';

header();

const body = document.querySelector('#app');

body.innerHTML = `
${introduction()}
${aboutMe()}
`
