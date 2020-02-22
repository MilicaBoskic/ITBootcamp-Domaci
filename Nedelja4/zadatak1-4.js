// 1. Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)
// 	   * Име
//     * Врста
//     * Способности (низ способности покемона)
//     * Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))

let pokemon1 = {
    ime: "Pikachu",
    vrsta: "Elektricni",
    sposobnosti: ["Gromoviti sok", "Rezanje ", "Zamah repom"],
    karakteristike: {
                    napad: 55,
                    odbrana: 30,
                    brzina: 90,
                }
}

let pokemon2 = {
    ime: "Bulbasaur",
    vrsta: "Otrovni",
    sposobnosti: ["Otrovni prah", "Slatki miris", "Dvostruka oštrica "],
    karakteristike: {
                    napad: 49,
                    odbrana: 49,
                    brzina: 45,
                }
}

let pokemon3 = {
    ime: "Kabutops",
    vrsta: "Kameni",
    sposobnosti: ["Opaki pogled", "Hitac blatom", "Napad peskom"],
    karakteristike: {
                    napad: 115,
                    odbrana: 105,
                    brzina: 80,
                }
}

let pokemon4 = {
    ime: "Pidgeot",
    vrsta: "Leteci",
    sposobnosti: ["Tornado", "Prijateljski vetar", "Zračno razrezivanje"],
    karakteristike: {
                    napad: 80,
                    odbrana: 75,
                    brzina: 91,
                }
}

let pokemon5 = {
    ime: "Nidoking",
    vrsta: "Elektricni",
    sposobnosti: ["Kljucanje", "Moć zemlje", "Mega rog"],
    karakteristike: {
                    napad: 92,
                    odbrana: 77,
                    brzina: 85,
                }
}

let pokemon6 = {
    ime: "Psyduck",
    vrsta: "Vodeni",
    sposobnosti: ["Vodeni pištolj", "Besno udaranje", "Vodeni puls"],
    karakteristike: {
                    napad: 52,
                    odbrana: 48,
                    brzina: 55,
                }
}

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];

console.log(pokemoni);


// 2. Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона



let sposobnostiPokemona = (arr) => {
    let nizPokSposobnost = [];

        for(let el of arr) {
            for(let i of el.sposobnosti){
            nizPokSposobnost.push(i);
            }
    }
    return nizPokSposobnost;

}
console.log(sposobnostiPokemona(pokemoni));



// 3. Сортирати покемоне по брзини, растуће.


let pokemonBrzina = pokemoni.sort((a, b) => {
    return a.karakteristike.brzina - b.karakteristike.brzina;
})
console.log(pokemonBrzina);



// 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.


let elMasFuerte = (pokemoni) => {
    let x = 0;
    let elMillor = pokemoni[x];

        for (const el of pokemoni) {
            if (elMillor.karakteristike.napad < el.karakteristike.napad)
                elMillor = el;
    }
    return elMillor;
}
console.log(elMasFuerte(pokemoni));
