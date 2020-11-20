// let iLoveJs = ['Love', 'I', 'JavaScript'];

// let x = iLoveJs.splice(1, 1);
// iLoveJs.unshift(x[0]);

// console.log(iLoveJs);




let anotherArray = ['Paul', 
                    1, 
                    false, 
                    {name: 'Jon Snow'}, 
                    [1, 2, 3], 
                    null, 
                    undefined, 
                    function() { 
                        console.log('Test');
                    },
];


for(let i = 0; i < anotherArray.length; i++) {
    console.log(`Pozitia: ${i}, 
valoarea: ${anotherArray[i]},
tipul: ${typeof anotherArray[i]}.

`);
}