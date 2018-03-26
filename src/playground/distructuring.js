
//Object disctructuring
const person = {
  age:24,
  name:'maksim',
  location:{
    city:'qiryat ata',
    temperature:13
  }
};

const {name, age} = person;
console.log(`${name} is ${age} years old.`);

//example : we can give another alias name for any var
//like we see in the below example temperature: temp
//also we can put default value in case it is undefined
//it will assign this value to the default, planet= 'earth' 
const {temperature: temp, city, planet='Earth'} = person.location;
console.log(`its ${temp}c in ${city} on planet ${planet}`);

const book = {
  title:'Tarzan',
  author: 'Ryan Holiday',
  publisher:{
    name:'Pinguin'
  }
};

const {name: publisherName='Self published'} = book.publisher;
console.log(publisherName);


//Array disctructuring
const address = ['1299 S Juniper Street', 'Philodelphia', 'Pennsylvenia','19147'];
const [street, town, state, zip] = address;
console.log(`You are in ${state} ${town}.`)

const menu = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];

const [item, , mediumPrice] = menu; 
console.log(`A medium ${item} costs ${mediumPrice}`);
