"use strict";
var _a;
const heroes = [
    {
        id: 1,
        name: 'Iroman',
        owner: 'marvel',
    },
    {
        id: 2,
        name: 'Hulk',
        owner: 'marvel',
    },
    {
        id: 3,
        name: 'Spiderman',
        owner: 'marvel',
    }
];
const findHeroById = (id) => {
    return heroes.find(hero => hero.id === id);
};
const hero = findHeroById(1);
console.log(hero);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Hero not found'); //hero = undefined.name = undefined
