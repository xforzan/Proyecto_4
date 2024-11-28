import './introduction.css';

import { button } from '../../Components/Button/button';
import { data } from '../../Data/data.js';


export const introduction = () => `
<section class="introduction">
<img src=${data.avatar} alt="Ironhack logo">
<h2>${data.name}!</h2>
<h3>I do Code & <span>Chill</span>🍿</h3>
<p class="text">${data.introduction}</p>
<a href="mailto:${data.email}">${button('Contact Me', 'contactBtn', 'contactButton')}</a>

</section>

`;