import './header.css';
import { button } from '../Button/button';




export const header = () => {
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>Achraf Nakhil</h1>
        <ul>
        <li>        
        ${button('About Me', 'aboutMe', 'headerButton')}</li>
        <li>
        ${button('Contact', 'contact', 'headerButton')}
        </li>
        </ul>
    `;
    document.body.prepend(header);
}