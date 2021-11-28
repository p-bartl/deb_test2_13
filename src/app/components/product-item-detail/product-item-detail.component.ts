import { Component, OnInit } from '@angular/core';
import { ProductItemService } from 'src/app/services/product-item.service';
import { product } from 'src/app/models/model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product:product = {id:0,name:'',price:0,url:'0',description:''}
  quantityList = [1,2,3,4,5,6,7,8,9,10]
  selectedQuantity=1
  constructor(private productItemServe:ProductItemService,private cartService:CartService) { }

  ngOnInit(): void {
    this.product = this.productItemServe.getSelectedProduct();
  }

  addToCart(product:product):void{
    this.cartService.addCart(product.id,product,this.selectedQuantity)
    alert("Added to cart")
  }

}
