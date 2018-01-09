
import { Builder } from './Builder';

export class Director {
  constructor(builder: Builder) {
    builder.addCPU();
    builder.addMemory();
    builder.addHD();
    builder.addBox();
  }
}