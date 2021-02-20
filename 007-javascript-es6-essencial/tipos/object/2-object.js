const user = {
    name: 'Raphael',
    lastName: 'Andrade'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.vaules(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Raphael Andrade'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nAdiciona um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 28}));

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);
newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariavel newObj após as alterações', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Raphael' };
Object.seal(person);

person.name = 'Raphael Andrade';
delete person.name;
person.age = 29;

console.log('\nVariável person após as alterações:', person);