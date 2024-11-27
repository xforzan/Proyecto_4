import './header.css';
import { button } from '../Button/button';


export const Header = document.createElement('header');

export const header = () => {
    
    Header.innerHTML = `
        <h1>Achraf Nakhil</h1>
        <ul>
        <li>        
        ${button('About Me', 'aboutMe', 'headerButton')}
        </li>
        <li>
        ${button('Contact', 'contact', 'headerButton')}
        </li>
        <li>
        ${button('', 'darkTheme', 'themeButton')}
        </li>
        </ul>
    `;
    document.body.prepend(Header);
}