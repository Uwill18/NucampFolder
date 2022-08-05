//Array.map() review
//Array.map() returns a new array of the same size as the old array
//its callback gunction transforms the items put into the new array

// const names = ['Tanjiro','Zenitsu','Inosuke'];
// const bigNames = names.map((name) => name.toUpperCase());

// console.log(bigNames);
// console.log(names);

//Array.filter() and Array.find() basic syntax
// const newArray = Array.filter(callbackFn); // returns a new array that may
// or may not be the same size as the old array. Its callback function tests
//the items to identify what to put into the new array, thus filtering the list. 
//The item values are not changed. 

// const value = Array.find(callbackFn);//returns one value

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

// const myFavoriteThings = things.filter((thing) => thing.favorite);
// console.log(myFavoriteThings);

// const thingsWithOverFiftyPoints = things.filter((thing => thing.points > 50));
// console.log(thingsWithOverFiftyPoints);

// const selectThingByID = (id) => {
//     return things.find((thing) => thing.id === id)
// };

// const selectedThing = selectThingByID(3);
// console.log(selectedThing);

//console.log(things.find((thing)=>thing.featured));
console.log(things.filter((thing)=>thing.featured)[0]);