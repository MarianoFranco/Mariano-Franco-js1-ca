async function getPokemons() {
    document.querySelector('.loading').innerHTML =`
    <img src="img/pokeLoading.gif" alt="loading">
    `;
    document.querySelector('h1').classList.add('hide');
    document.querySelector('.card').classList.add('hide');
    try {
        
        const response = await fetch('https://api.pokemontcg.io/v2/cards');
        const jsonResults = await response.json();
        const pokemon = jsonResults.data;
        console.log(pokemon);
		
           
        document.querySelector('h1').classList.remove('hide');
        document.querySelector('.card').classList.remove('hide');
        
        pokemon.forEach(value => {
            document.querySelector('.loading').innerHTML = '';
            document.querySelector('.card').innerHTML += `                               
                    <div class="cards__container">
                        <h2>${value.name}</h2>
                        <img src="${value.images.small}"  class="cards__img"/>
                        <a href="details.html?id=${value.id}" class="card__btn">More details</a>
                    </div>               
            `    
        });
        document.querySelector('.card').classList.remove('hide');

	} catch (error) {
        document.querySelector('.alert').innerHTML = showAlertTouser(
			'An error occured please contact Superman to fix it',
			'danger'
		);
    } finally {
        document.querySelector('.loading').classList.add('hide');        
        setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
	}
}

getPokemons();