import { Component, OnInit } from '@angular/core';
import { ProductItemService } from 'src/app/services/product-item.service';
import { productArray } from 'src/app/models/model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})

export class ProductItemDetailComponent implements OnInit {

  product_child_on_detailpage:productArray = {id:0,name:'',price:0,url:'0',description:''}
  quantityList = [1,2,3,4,5,6,7,8,9,10]
  amount_input_frontend=1
  constructor(private productItemServe:ProductItemService,private cartService:CartService) { }

  ngOnInit(): void {
    this.product_child_on_detailpage = this.productItemServe.getSelectedProduct();
  }

  addToCart(productArrayInput:productArray):void{
    this.cartService.addCart(productArrayInput.id,productArrayInput,this.amount_input_frontend)
    alert("Added to cart")
  }

}
