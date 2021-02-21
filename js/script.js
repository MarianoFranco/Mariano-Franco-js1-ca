async function getPokemons() {
	// try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon');
		const jsonResults = await response.json();
		const pokemon = jsonResults.results;
		console.log(pokemon);
		

		
		pokemon.forEach(function (value) {
			document.querySelector('main').innerHTML += `
            <div class="card">               
                <div class="card__body">
                    <h1>${value.name}</h1>
                    <a href="${value.url}">Read More</a>
                </div>
            </div>
        `;
		});
	// } catch (error) {
	// 	// document.querySelector('.alert') += showAlertTouser(error, 'danger');
	// } finally {
	// 	// setTimeout(function () {
	// 	// 	document.querySelector('.alert').innerHTML = '';
	// 	// }, 3000);
	// }
}

getPokemons();