const apiData = {
    url: 'https://pokeapi.co/api/v2/',
    type: 'pokemon',
    id: '25',
}
const {url, type, id} = apiData
const apiUrl = `${url}${type}/${id}`

fetch(apiUrl)
    .then( (data) =>  (data.json())
    .then( (pokemon) => console.log(pokemon))