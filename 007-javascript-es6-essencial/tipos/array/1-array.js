const users = ['Raphael', 'Joao', 'Maria'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const people = [
    {
        name: 'Raphael',
        age: 29,
        gender: gender.MAN
    },
    {
        name: 'Joao',
        age: 15,
        gender: gender.MAN
    },
    {
        name:'Maria',
        age: 14,
        gender: gender.WOMAN
    }
];

// Retornar a quantidade de itens de um array
console.log('Items:', people.length);

// Verificar se é array
console.log('A variável people é um array:', Array.isArray(people));

// Iterar os itens do array
people.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index}`, arr);
});

// Filtrar array
const men = people.filter(person => person.gender === gender.MAN);
console.log('\nNova lsta apenas com homens:', men);

// Retornar um novo
const peopleWithCourse = people.map(person => {
    person.course = 'Introdução ao Javascript';
});

console.log('\nPessoas com a adição do course:', peopleWithCourse);

// Tranformar um array em outro tipo
const totalAge = people.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

// Juntando operações
const totalEvenAges = people
                        .finter(person => person.age % 2 ===0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);
                        
console.log('\Soma de idades das pessoas que possuem idade par', totalEvenAges);