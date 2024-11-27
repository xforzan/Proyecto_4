import './experience.css';

import { data } from '../../Data/data.js';

export const experience = () => {
    const experience = document.createElement('section');
    experience.classList.add('experience');
    experience.innerHTML = `
    <h2>Experience</h2>
    <span>Explore Now</span>`
    document.body.append(experience);
    const skills = document.createElement('div');
    skills.classList.add('skills');

const ocupation = document.createElement('div');
ocupation.classList.add('ocupation');
const job = document.createElement('h3');
job.innerHTML = `${data.workExperience[0].company}/<span class="position">${data.workExperience[0].position}</span>`;
ocupation.append(job);
const date = document.createElement('h3');
date.innerHTML = `${data.workExperience[0].startDate} - ${data.workExperience[0].endDate}`;
ocupation.append(date);



const description = document.createElement('p');
description.classList.add('text');
description.innerHTML = data.workExperience[0].description;
experience.append(ocupation);
experience.append(description);

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