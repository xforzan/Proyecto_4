import './changeContent.css';

export const changeContent = () => `

<section class="changeContent">
<div class="buttons">
			<div id="btn"></div>
			<button type="button" class="toggle-btn" onclick="leftClick()">Experience</button>
			<button type="button" class="toggle-btn" onclick="rightClick()"></button>
		</div>
</section>
`;

window.leftClick = () => {
    const btn = document.getElementById('btn');
    btn.style.left = '0';
};

window.rightClick = () => {
    const btn = document.getElementById('btn');
    btn.style.left = '110px';
};