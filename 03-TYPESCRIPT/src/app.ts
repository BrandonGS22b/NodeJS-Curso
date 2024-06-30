const heroes =[
    {
id: 1 ,
name:'Iroman',
owner:'marvel',

},
{


    id: 2,
    name:'Hulk',
    owner:'marvel',
},
{

    id: 3,
    name:'Spiderman',
    owner:'marvel',
}
]


const findHeroById = (id: number) => {
    return heroes.find(hero => hero.id === id);

}

const hero = findHeroById(1)

console.log(hero);

console.log(hero?.name ?? 'Hero not found'); //hero = undefined.name = undefined