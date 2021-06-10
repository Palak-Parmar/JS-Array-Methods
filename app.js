//filter method 1

const scores= [15,20,25,30,45];
const validScore= scores.filter((score)=>{
    return score>20;
});
console.log(validScore);

//filtermethod 2

const users=[
    {name:'palak', premium: true},
    {name:'sarthak' ,premium: true },
    {name: 'bro' ,premium: false}
];
const premiumUsers= users.filter((user) =>{
     return user.premium;
});
console.log(premiumUsers);

// map method

const prices=[10,20,30,12,13];
const setPrices= prices.map((price)=>{
    return price/2;
});
console.log(setPrices);

//map method 2

const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

const productPrice = products.map((product)=>{
        if(product.price>30){
        return{name: product.name , price: product.price/2};
        }
        else{
            return product;
        }
});

console.log(productPrice);

//reduce method 

const scoes= [60,50,70,80,20];
const result= scoes.reduce((acc,curr)=>
{
    if(curr>50)
    {acc++}
    return acc;

},0);
console.log(result);

//find method 

const srs=[20,40,50,70,40];
const firstHighScore= srs.find((srs)=>
{
    return srs>50;
});
console.log(firstHighScore);

//sort method

//method 1

const array = [10,50,40,20,60];
array.sort();
array.reverse();
console.log(array);

//method 2

const players = [
    {name: 'mario', score: 20},
    {name: 'luigi', score: 10},
    {name: 'chun-li', score: 50},
    {name: 'yoshi', score: 30},
    {name: 'shaun', score: 70}
  ];
players.sort((a,b)=> b.score-a.score);
console.log(players);

// chaining array methods 

//method 1

const pro = [
    {name: 'gold star', price: 30},
    {name: 'green shell', price: 10},
    {name: 'red shell', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mushroom', price: 50}
  ];

const naya = pro.filter((product)=>{
     return product.price>20;
});
console.log(naya);

const map = naya.map((product)=>
{
    return `the product ${product.name} is ${product.price/2} pounds`;

});
console.log(map);

//method 2

const promos = pro
    .filter(product=> product.price>20)
    .map(product => `the product ${product.name} is ${product.price/2} pounds`);
console.log(promos);
