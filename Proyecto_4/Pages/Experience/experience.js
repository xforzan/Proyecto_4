import './experience.css';

import { data } from '../../Data/data.js';
import { button } from '../../Components/Button/button';

export const experience = () => {
    const experience = document.createElement('section');
    experience.classList.add('experience');
    experience.innerHTML = `
    <h2>Experience</h2>
    <span>Explore Now</span>`
    document.body.append(experience);
    const skills = document.createElement('div');
    skills.classList.add('skills');
    for (const project of data.skills){
        const skill = document.createElement('div');
        skill.classList.add('skill');
        const span = document.createElement('span');
        span.innerHTML = project
        skill.appendChild(span)
        skills.append(skill);
    }
    experience.append(skills);
    document.body.appendChild(experience);
    };