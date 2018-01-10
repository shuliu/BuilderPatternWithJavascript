
import { Builder } from './Builder';

export class NBBuilder implements Builder {

  private Product: any = {};

  constructor() {}

  addCPU(){
    // console.log('CUP選用： intel i5');
    this.Product.cpu = 'intel i5';
  }

  addMemory(){
    // console.log('記憶體選用： 16G DDR3');
    this.Product.memory = '16G DDR3';
  }

  addHD(){
    // console.log('硬碟選用： 256GB');
    this.Product.hd = '256GB';
  }

  addBox(){
    // console.log('機殼選用： 13.3吋');
    this.Product.box = ' 13.3吋';
  }

  GetResult() {
    console.log('組裝筆電');
    console.log(this.Product);
    return this.Product;
  }

}