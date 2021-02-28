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
		let data = jsonResults.data;
        const abilities = data.abilities;
        document.title = data.name;
     
            document.querySelector('.details').innerHTML += `
                    <div class="details__container1">
                        <img src="${data.images.large}" class="card__img"></img>
                    </div>
                    <div class="details__container2">
                        <h2>${data.name}</h2>
                        <p class="details__hp">HP: ${data.hp}</p>
                        <div class="details__level">
                        </div>                        
                        <div class="details__abilities">
                        </div>
                    </div>
                `;        
                
                if(!data.level){
                    document.querySelector('.details__level').innerHTML +=`
                  
                    <p>The level does not show in this pokemon</p>
                    `
                }
                else{
                    document.querySelector('.details__level').innerHTML += `
                    
                    <p>Level: ${data.level}</p>
                
                    `
                }
                        
                if (abilities) {
                    for (let i = 0; i < abilities.length; i++){
                        document.querySelector('.details__abilities').innerHTML +=
                            `
                            <h3 class="details__abilities--name">${abilities[i].name}</h3>
                            <p> ${abilities[i].text}</p>
                            `;
                    }
                }
                else{
                    document.querySelector('.details__abilities').innerHTML +=
                            `
                            <p>There are no abilities for this pokemon</p>
                            `;
                };	
		
	} catch (error) {
        document.querySelector('.alert').innerHTML = showAlertTouser(
			'An error occured please contact Superman to fix it',
			'danger'
		);
	} finally {
		setTimeout(function () {
			document.querySelector('.alert').innerHTML = '';
		}, 3000);
	}
}

getId(id);