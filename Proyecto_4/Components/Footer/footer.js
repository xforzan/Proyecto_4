import './footer.css';

export const footer = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
    <div class="socialMedia"
        <ul>
        <li>
        <img src="https://img.icons8.com/ios/50/000000/github.png"/>
        </li>
        <li>
        <img src="https://img.icons8.com/ios/50/000000/github.png"/>
        </li>
        <li>
        <img src="https://img.icons8.com/ios/50/000000/github.png"/>
        </li>
        <li>
        <img src="https://img.icons8.com/ios/50/000000/github.png"/>
        </li>
        </ul>
        </div>
        <p class="copyright" >© 2024 Achraf Nakhil. All rights reserved.</p>
    `;
    document.body.appendChild(footer);
}