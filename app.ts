
import { ComputerBuilder } from './ComputerBuilder';
import { NBBuilder } from './NBBuilder';
import { Director } from './Director';

let BuilderPC = new ComputerBuilder();
let directorPC = new Director(BuilderPC);
console.log('建立五台 PC');
for (let index = 0; index < 5; index++) {
  let PC = BuilderPC.GetResult();
}

let BuilderNB = new NBBuilder();
let directorNB = new Director(BuilderNB);
console.log('建立十台筆電');
for (let index = 0; index < 10; index++) {
  let NB = BuilderNB.GetResult();
}

