import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { productArray } from 'src/app/models/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {
  cartList: {[productId: number]: {productInCartArray: productArray, amount_stored: number}} = {};
  sum_total = 0;
  fullName = '';
  address = '';
  creditCardNumber = '';

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.getSumTotal();
  }

  getSumTotal(){
    this.sum_total = 0;

    for(let productId in this.cartList){
      this.sum_total += this.cartList[productId].amount_stored * this.cartList[productId].productInCartArray.price;
    }

    this.sum_total = parseFloat(this.sum_total.toFixed(2));
  }

  purchase(){
    this.cartService.setPurchaseInfo(this.fullName,this.address,this.sum_total)
    this.router.navigateByUrl('/confirmation')
  }

  removeItem(productId: number){
    this.cartService.removeItem(productId);
    this.getSumTotal();
  }

  isCartListEmpty(): boolean{
    if(Object.keys(this.cartList).length == 0){
      return true;
    }
    return false;
  }
}