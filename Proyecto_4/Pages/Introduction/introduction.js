import './introduction.css';

import { button } from '../../Components/Button/button';


export const introduction = () => `
<section class="introduction">
<img src="https://wallpapers.com/images/hd/soldier-boy-profile-picture-2g9ddl1byiw38lmh.jpg" alt="Ironhack logo">
<h2>Achraf Nakhil!</h2>
<h3>I do Code & <span>Chill</span>🍿</h3>
<p class="text">Passionate Software Engineer with a focus on React Native development,
dedicated to crafting elegant and user-friendly mobile applications.</p>
${button('Contact Me', 'contactBtn', 'contactButton')}
</section>

`;