import './footer.css';

export const footer = () => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <h1>Achraf Nakhil</h1>
    `;
    document.body.appendChild(footer);
}