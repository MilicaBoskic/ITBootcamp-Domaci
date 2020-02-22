//objekti

let pokemon1 = {
    ime: "Pikachu",
    vrsta: "Elektricni",
    sposobnosti: ["Gromoviti sok", "Rezanje ", "Zamah repom"],
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90,
    },
    slika: 'images/pikachu.png'
}

let pokemon2 = {
    ime: "Bulbasaur",
    vrsta: "Otrovni",
    sposobnosti: ["Otrovni prah", "Slatki miris", "Dvostruka oštrica "],
    karakteristike: {
        napad: 49,
        odbrana: 49,
        brzina: 45,
    },
    slika: 'images/bulbasaur.png'
}

let pokemon3 = {
    ime: "Kabutops",
    vrsta: "Kameni",
    sposobnosti: ["Opaki pogled", "Hitac blatom", "Napad peskom"],
    karakteristike: {
        napad: 115,
        odbrana: 105,
        brzina: 80,
    },
    slika: 'images/kabutops.png'
}

let pokemon4 = {
    ime: "Pidgeot",
    vrsta: "Leteci",
    sposobnosti: ["Tornado", "Prijateljski vetar", "Zračno razrezivanje"],
    karakteristike: {
        napad: 80,
        odbrana: 75,
        brzina: 91,
    },
    slika: 'images/pidgeot.png'
}

let pokemon5 = {
    ime: "Nidoking",
    vrsta: "Elektricni",
    sposobnosti: ["Kljucanje", "Moć zemlje", "Mega rog"],
    karakteristike: {
        napad: 92,
        odbrana: 77,
        brzina: 85,
    },
    slika: 'images/nidoking.png'
}

let pokemon6 = {
    ime: "Psyduck",
    vrsta: "Vodeni",
    sposobnosti: ["Vodeni pištolj", "Besno udaranje", "Vodeni puls"],
    karakteristike: {
        napad: 52,
        odbrana: 48,
        brzina: 55,
    },
    slika: 'images/psyduck.png'
}

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6];  // niz pokemona

let wrap = document.querySelector('.wrapper');
let btnPrikaz = document.querySelector('#prikaz');
let btnPobednik = document.querySelector('#pobednik');


btnPrikaz.addEventListener('click', () => {
    pokemoni.forEach(element => {
        let par = document.createElement('p');  // kreira se paragraf 

            par.textContent =                    // unose se podaci pokemona
                `Ime: ${element.ime};
                Vrsta: ${element.vrsta};
                Sposobnosti: ${element.sposobnosti};
                Karakteristike:
                                napad: ${element.karakteristike.napad},
                                odbrana: ${element.karakteristike.odbrana},
                                brzina: ${element.karakteristike.brzina}`;

        wrap.appendChild(par);  // u div se dodaje paragraf


        let image = document.createElement('img');
            image.src = element.slika;  // povlaci se slika odredjenog pokemona


        wrap.appendChild(image);  // u div se dodaje slika
    
    });
});

// funkcija koja prikazuje najjaceg pokemona

let elMasFuerte = (pokemoni) => {
    let x = 0;
    let elMillor = pokemoni[x];
    for (const el of pokemoni) {
        if (elMillor.karakteristike.napad < el.karakteristike.napad)
        elMillor = el;
}
return elMillor;
}

btnPobednik.addEventListener('click', (element) => {
    
    let par = document.createElement('p');

            par.textContent = 
                `Ime: ${elMasFuerte(pokemoni).ime}; 
                Vrsta: ${elMasFuerte(pokemoni).vrsta}; 
                Sposobnosti: ${elMasFuerte(pokemoni).sposobnosti}; 
                Karakteristike: 
                                napad: ${elMasFuerte(pokemoni).karakteristike.napad},
                                odbrana: ${elMasFuerte(pokemoni).karakteristike.odbrana},
                                brzina: ${elMasFuerte(pokemoni).karakteristike.brzina}`;

        wrap.appendChild(par);

        let image = document.createElement('img');
            image.src = elMasFuerte(pokemoni).slika;

        wrap.appendChild(image);
    
    });