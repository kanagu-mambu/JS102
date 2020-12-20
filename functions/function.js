//arguments keyword

var add = function (a, b) {
    console.log(arguments); //logs [1,2,3]
    return a + b;
}

add(1, 2, 3);


//constructor function
function AnimalSpeaker(name) {
    return {
        speak: function () {
            console.log('my name is ' + name);
        }
    }
}

var dog1 = new AnimalSpeaker('Dog 1')
var dog2 = new AnimalSpeaker('Dog 2')

dog1.speak();
dog2.speak();

function AnimalTestUser(username) {

    var otherArgs = []
    if (arguments.length > 1) {
        for (i = 1; i < arguments.length; i++) {
            otherArgs.push(arguments[i])
        }
    }

    return {
        userName: username,
        otherArgs: otherArgs
    }

}

var testSheep = AnimalTestUser('cotton ball', { 'loves dancing': true })
console.log(testSheep);

function AnimalCreator(username, species, tagline, noises) {
    var animal = {
        userName: username,
        species: species,
        tagline: tagline,
        noises: noises,
        friends: []
    }

    return animal
}

var sheep = AnimalCreator('cloud', 'sheep', 'you can count on me', ['bahh', 'arggg', 'chewchew'])
sheep.friends.push(AnimalCreator('cloud1', 'sheep', 'you can count on me', ['bahh', 'arggg', 'chewchew']))
console.log(sheep)