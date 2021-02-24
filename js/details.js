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
                        <p>HP: ${data.hp}</p>
                        <p>Level: ${data.level}</p>
                        <div class="abilities">
                        </div>
                    </div>
                `;        
                        
                if (abilities) {
                    for (let i = 0; i < abilities.length; i++){
                        document.querySelector('.abilities').innerHTML +=
                            `${abilities[i].name} <br /> ${abilities[i].text}
                            `
                    }
                }
                else{
                    document.querySelector('.abilities').innerHTML +=
                            `There are no abilities for this pokemon
                            `
                }	
		
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