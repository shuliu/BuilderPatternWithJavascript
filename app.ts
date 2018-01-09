
import { ComputerBuilder } from './ComputerBuilder';
import { NBBuilder } from './NBBuilder';
import { Director } from './Director';

let BuilderPC = new ComputerBuilder();
let BuilderNB = new NBBuilder();

let director = new Director(BuilderPC);

let PC = BuilderPC.GetResult();

let director2 = new Director(BuilderNB);

let NB = BuilderPC.GetResult();
