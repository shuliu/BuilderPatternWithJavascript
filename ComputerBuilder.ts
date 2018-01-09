
import { Builder } from './Builder';

export class ComputerBuilder implements Builder {

  private Product: any = {};

  constructor() {}

  addCPU(){
    console.log('CUP選用： intel i7');
    this.Product.cpu = 'intel i7';
  }

  addMemory(){
    console.log('記憶體選用： 32G DDR3');
    this.Product.cpu = '32G DDR3';
  }

  addHD(){
    console.log('硬碟選用： 1TB');
    this.Product.cpu = '1TB';
  }

  addBox(){
    console.log('機殼選用： 很大的機殼');
    this.Product.cpu = '很大的機殼';
  }

  GetResult() {
    return this.Product;
  }

}