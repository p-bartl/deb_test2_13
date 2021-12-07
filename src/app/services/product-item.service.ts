import { productArray } from '../models/model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductItemService {
  private selectedProduct:productArray = {id:0,name:'',price:0,url:'',description:''}

  constructor() { }

  setSelectedProduct(product:productArray){
    this.selectedProduct = product
  }

  getSelectedProduct(){
    return this.selectedProduct;
  }
}
