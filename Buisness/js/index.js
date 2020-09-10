
//СМЕНА ЦВЕТА НИЖНЕЙ ПАНЕЛИ

let navend = document.querySelector('.end');

let color = ['brown', '#D428BE', 'blue', 'red', 'purple', 'magenta', 'green', 'black', 
'orange', '#d30068'];
function setRandomBackgroundColor() {
	navend.style.transition = '1s';
	navend.style.backgroundColor = color[Math.floor(Math.random() * 10)];
}

setInterval(setRandomBackgroundColor, 1500);

//

