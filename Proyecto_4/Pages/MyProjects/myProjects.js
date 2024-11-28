import './myProjects.css'
import { data } from '../../Data/data.js';


const app = document.querySelector('#app');

export const myProjects = () => {
  const myProjects = document.createElement('section');
  myProjects.classList.add('projectsHidden');
  myProjects.innerHTML = `
    <h2>Projects</h2>
    <span>Explore Now</span>`;

  const projects = document.createElement('div');
  projects.classList.add('projects');
  
  for (const project of data.projects) {
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('projectContainer');
    projectContainer.innerHTML = `
      <img src="${project.preview}" alt="project image">
      <h3>${project.title}</h3>
      <p class="text">${project.description}</p>
      <button class="githubButton"><a href="${project.github}" target="_blank">GitHub</a></button>
      <button class="linkButton"><a href="${project.link}" target="_blank">Link</a></button>
    `;
    

    projects.append(projectContainer);
  }
  
  myProjects.append(projects);

  app.appendChild(myProjects);
};
