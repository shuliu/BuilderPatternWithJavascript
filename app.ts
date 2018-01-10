
import { ComputerBuilder } from './ComputerBuilder';
import { NBBuilder } from './NBBuilder';
import { Director } from './Director';

let BuilderPC = new ComputerBuilder();
let BuilderNB = new NBBuilder();

let directorPC = new Director(BuilderPC);

let PC = BuilderPC.GetResult();

let directorNB = new Director(BuilderNB);

let NB = BuilderNB.GetResult();
