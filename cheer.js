#!/user/bin/env node

//const
const firstName = 'Peter';
//const
const lastName = 'Garrido';

//const // object literal shorthand.
const myName = {
  firstName,
  lastName
}

//destructuring assignment.
const cheer = ({
  firstName,
  lastName
}) => {

  //string template literals, let.
  let name = `${firstName} ${lastName}`.toUpperCase();

  //spread operator and fat arrow function.
  [...firstName, ...lastName].forEach((letter) => {
    let conj = 'thingy'.includes(letter.toLowerCase()) ? 'an' : 'a'

    //string template literals again.
    console.log(`Give me ${conj} ${letter.toUpperCase()}!`);
  });

  console.log(`What does that spell?\n${name}!`);
}

cheer(myName);
