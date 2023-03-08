let container_characters = document.getElementById('container_characters')
function getCharacters(callback){
    const datos = fetch("https://rickandmortyapi.com/api/character")
    
    datos
        .then(response => response.json())
        .then(data=> {
            callback(data)
        });
}


getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(
        `
            <div class="card" style="width: 18rem;">
                <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text"><b>Status:</b> ${personaje.status}</p>
                    <p class="card-text"> <b>Species:</b> ${personaje.species}</p>
                </div>
            </div>
        `
        );
        container_characters.append(article)      
    })
})
