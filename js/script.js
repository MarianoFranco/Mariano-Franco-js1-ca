async function getPokemons() {
	try {
        const response = await fetch('https://api.pokemontcg.io/v2/cards');
		const jsonResults = await response.json();
		const pokemon = jsonResults.data;
		console.log(pokemon);
		
		pokemon.forEach(function (value) {
			document.querySelector('main').innerHTML += `
            <div class="card">               
                <div class="card__body">
                    <h1>${value.name}</h1>
                    <img src="${value.images.small}" />
                    <a href="details.html?id=${value.id}">Read More</a>
                </div>
            </div>
        `;
		});
	} catch (error) {
		document.querySelector('.alert') += showAlertTouser(error, 'danger');
	} finally {
		// setTimeout(function () {
		// 	document.querySelector('.alert').innerHTML = '';
		// }, 3000);
	}
}

getPokemons();