export default function CustomerWelcome() {

    // // Async/Await in JS, this came around in 2016 (ECMAScript6)
    //  async function asyncAllPokemon() {
    //     const response = await fetch("http://localhost:8080/poke_project/pokemon")
    // //     const response = await fetch("http://localhost:8080/poke_project/pokemon", 
    // //                             {headers: {
    // //                                 'Access-Control-Allow-Origin': '*',
    // //                                 'Content-Type': 'application/json'
    // //                             }});
    //      const cusomer = await response.json();
    //      console.log(cusomer);
    //      ourLoopedHTML(cusomer);
    // }

    // function ourLoopedHTML(cusomer) {

    //     let html_code = "";
    //     for (let i in cusomer) {
    //         let pokemon = pokemcusomerons[i];
    //         html_code += `<h1>Pokemons Name: ${cusomer.pokemonName} </h1>`;
    //         html_code += `<h3 style="margin-left: 40px">Element Type: ${cusomer.elementType.type} </h3>`;
    //         html_code += `<h3 style="margin-left: 40px">HP: ${cusomer.hp} </h3>`;
    //         html_code += `<h3 style="margin-left: 40px">Ability 1: ${cusomer.ability1.abilityName} </h3>`;
    //         html_code += `<h3 style="margin-left: 70px">Damage: ${pokecusomermon.ability1.atkMultiplier * pokemon.atk} </h3>`;

    //         html_code += `<h3 style="margin-left: 40px">Ability 2: ${cusomer.ability2.abilityName} </h3>`;
    //         html_code += `<h3 style="margin-left: 70px">Damage: ${cusomer.ability2.atkMultiplier * pokemon.atk} </h3>`;
    //     }
    //     document.getElementById("findAllPokemon").innerHTML = html_code;
    // }

    return (
        <>
            <h1>Welcome to the CM Chicken!</h1>
            <p></p>
        </>
    )
}