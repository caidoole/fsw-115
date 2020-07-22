axios.get('https://pokeapi.co/')
    .then(responce =>{
        const pokemon = responce.data
    })
    .catch(error = 'error')