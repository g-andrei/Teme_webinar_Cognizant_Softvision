let me = {
    firstName: 'Andrei',
    lastName: 'Gheorghiu',
    town: 'Iasi',
    age: 25
};

console.log(`My name is ${me.firstName} ${me.lastName} and I'm ${me.age} old, I live in ${me.town}.`);


function myName(nume) {
    console.log(`Buna, numele meu este ${nume}`);
    return `Buna, numele meu este ${nume}`;
}


myName('Andrei');