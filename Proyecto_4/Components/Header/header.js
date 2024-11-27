import './header.css';

export const header = () => {
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>Achraf Nakhil</h1>
        <ul>
        <li></li>
        <li>
        <button id="aboutMe">About Me</button>
        </li>
        </ul>
    `;
}