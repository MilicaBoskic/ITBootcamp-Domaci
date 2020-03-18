let db = [];

    if (localStorage.db) {
        db = JSON.parse(localStorage.db);
    }


// {
//     name : 'Stefan Ivanovic',
//     phone : '060/00-00-000'
// },
// {
//     name : 'Milica Stojanovic',
//     phone : '060/11-11-111'
// },
// {
//     name : 'Jelena Topic',
//     phone : '060/22-22-222'
// }

export default db;