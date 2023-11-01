function pokeBusca(){
    let nome = document.querySelector('#nome').value
    fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
    .then(response=>response.json())
    .then(dados=>{
       // console.log(dados.name)
        document.querySelector('#pokeNome').innerHTML=dados.name
        //console.log(dados.id)
        document.querySelector('#pokeId').innerHTML=dados.id
        //console.log(dados.sprite.other.dream_world.front_default)
        document.querySelector('#pokeImg').src=dados.sprites.other.dream_world.front_default
    })
    .catch(error=>console.log(error))
}