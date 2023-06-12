const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd3fc4df633msh6fc141f4521bc49p14f6e2jsnd600f776cfcd',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}