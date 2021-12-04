import { Injectable } from '@angular/core';
import { productArray } from '../models/model';

@Injectable({
  providedIn: 'root'
})

export class ProductItemService {
  private product_stored:productArray = {id:0,name:'',price:0,url:'',description:''}

  constructor() { }
  setSelectedProduct(product_input:productArray){
    this.product_stored = product_input
  }

  getSelectedProduct(){
    return this.product_stored;
  }
}
