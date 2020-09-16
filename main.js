//loop through the object using forEach so that it logs, (eg,for user1)
//'user1 is called Jon and is 23 years old'
//the loop should not return a data structure
// Use one or more of the object methods to solve
const obj = {
  user1: {
    name: 'Jon',
    age: 23,
  },
  user2: {
    name: 'Jen',
    age: 25,
  },
  user3: {
    name: 'Jan',
    age: 21,
  },
};
Object.keys(obj).forEach(user =>console.log(`${user} is called ${Object.values(obj[user])[0]} and is ${Object.values(obj[user])[1]}`))
// Use Object Methods
//Create an albphabeticl list of every folder in the documents object (the keys are the folders)
//Create a list of every file in the documents object. one list.
const documents = {
  taxes: ['2010.xlx', '2020.xlx'],
  records: ['rec1.docx', 'rec2.docx', 'rec3.docx'],
  miscellaneous: ['pic.jpg', 'passwords.pdf', 'docs.txt'],
  Clubhouse: ['paty.jpg', 'christmasRules.pdf', 'pool.txt'],
};
const folders = Object.keys(documents);
const files = Object.values(documents).join().split(',');
//Are the two books alike? Create a function and Use Object methods to find out. Change object values to test for non-alike objects
const book1 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const book2 = {
  title: 'My Book',
  author: 'John Doe',
  year: '2019',
};
const compareBook = (bk1,bk2)=>{
  let key1 = Object.keys(bk1);
  let key2 = Object.keys(bk2);
  let results = (key1.length === key2.length) && (key1.map(key => bk2[key] !==undefined))&&(key1.map(key =>book1[key]===book2[key]))
return results.reduce((result,boo)=>  boo&&result,true )};

let x = compareBook(book1,book2);
x