// get the query string
const queryString = document.location.search;
console.log(queryString)
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
console.log(params)
// get the id parameter from the query string
const id = params.get('id');

console.log(id)

async function getId(pokemonId) {
	try {
		
		const response = await fetch('https://api.pokemontcg.io/v2/cards/' + pokemonId);
		const jsonResults = await response.json();
		console.log(jsonResults);
		data = jsonResults.data;

        document.title = data.name;

		document.querySelector('h1').innerHTML = `${data.name}`;
		// document.querySelector(
		// 	'.background__image'
		// ).style.backgroundImage = `url('${jsonResults.background_image}')`;

		// document.querySelector('.desc').innerHTML = jsonResults.description;
	} catch (error) {
		// document.querySelector('.alert').innerHTML += showAlertTouser(
		// 	error,
		// 	'danger'
		// );
	} finally {
		// setTimeout(function () {
		// 	document.querySelector('.alert').innerHTML = '';
		// }, 3000);
	}
}

getId(id);