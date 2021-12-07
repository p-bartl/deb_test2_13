import { Injectable } from '@angular/core';
import { productArray } from '../models/model';


@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cart:{[productId:number]:{productInCartArray:productArray,amount_stored:number}} = {}
  private purchaseArray:{fullname:string, address:string,sum_total:number} = {fullname:'',address:'',sum_total:0}

  constructor() { }

  addCart(productId:number,productArrayInput:productArray,amount_input:number){
    if(productId in this.cart){
      this.cart[productId].amount_stored +=amount_input
    }
    else{
      this.cart[productId] = {productInCartArray:productArrayInput, amount_stored:amount_input}
    }
  }

  getCart(){
    return this.cart
  }

  resetCart(){
    this.cart = {}
    this.purchaseArray = {fullname:'',address:'',sum_total:0}
  }
  
  setPurchaseInfo(fullname:string,address:string,sum_total:number){
    this.purchaseArray.fullname = fullname;
    this.purchaseArray.address = address;
    this.purchaseArray.sum_total = sum_total;
  }
 
  getPurchaseInfo():{fullname:string,address:string,sum_total:number}{
    return this.purchaseArray;
  }

  removeItem(productId:number){
    delete this.cart[productId]
  }
}