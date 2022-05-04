const container = document.querySelector('.container');
const select = document.querySelector('.form-select');

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const getRandomNumbers = (min, max) => Math.floor(Math.random() * (max - min +1) + min);

const hexaGenerator = () => {
	let hexaString = '';
	const chars = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	for(let i=0; i<6; i++) {
		hexaString += chars[getRandomNumbers(0, chars.length - 1)];
	}
	return '#' + hexaString;
}

const printIcon = (icon) => {
	const {name, prefix, family, color} = icon;
	return ` <div class="box"> 
							<i class="${family} ${prefix}${name}" style="color:${color}"></i>
							<p>${name}</p>
						</div>`;
}

// console.log(option);

const printIcons = (iconsToPrint) => {
	const newColors = {};
	option.forEach( option => {
		newColors[option] = hexaGenerator();
	})
	container.innerHTML = '';
	// const newColors = {};
	iconsToPrint.forEach(icon => {
		for(let key in newColors) {
			if(icon.type === key) {
				icon.color = newColors[key];
			}
		}
		container.innerHTML += printIcon(icon);
		// newColors[option] = hexaGenerator();
	})
	// console.log(newColors);
}

const changeSelect = (event) => {
	// console.log(event.target.value);
	let iconsFiltered = icons.filter( icon => {
	return icon.type === event.target.value || event.target.value === 'all';
	})

	printIcons(iconsFiltered);
}



select.addEventListener('change', changeSelect);



const option = [];



icons.forEach(icon => {
 	if(!option.includes(icon.type)) {
 		option.push(icon.type);
 		select.innerHTML += `<option value="${icon.type}">${icon.type}</option>`;
 	}
})

printIcons(icons);










