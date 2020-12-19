//Use this file to implement Part One of your project


var animal = {};
animal.username = 'Mittens';
animal['tagline'] = 'Pet me!';

var noises = ['hiss'];
noises.unshift('purr');
noises.push('meow')
noises[3] = 'growl'

console.log(noises.length)
console.log(noises)


animal.noises = noises;
console.log(animal);

var animals = [];
animals.push(animal)

var quackers = { username: 'DaffyDuck', tagline: 'Yipeeee!', noises: ['quack 1'] }
animals[animals.length] = quackers;

var dog = { username: 'Kabosu', tagline: 'high profile!', noises: ['bark', 'wow'] }

var honeybadger = {}
honeybadger.username = 'Randall'
honeybadger.tagline = 'Honey badger dont care'
honeybadger.noises = ['screech', 'growl']

animals.push(dog, honeybadger)

console.log('\n printing animals array \n')
console.log(animals)

/* var count = 0;

for (var key in animal) {
    count++;
    if (key === username) {
        console.log('Hi my name is' + animal[key]);
    }
    else if (key === 'tagline') {
        console.log('I like to say' + animal[key]);
    }
}

 */