import { Component, OnInit } from '@angular/core';
import { ProductsListService } from 'src/app/services/products-list.service';
import { productArray } from 'src/app/models/model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {

  productsList:productArray[]=[]
  constructor(private productListService:ProductsListService,private cartService:CartService) { }

  ngOnInit(): void {
    this.productListService.getProductsList().subscribe(data=>{
      this.productsList = data;
    })
  }

  addToCart(cartItem:{product:productArray,amount_input:number}){
    this.cartService.addCart(cartItem.product.id,cartItem.product,cartItem.amount_input)
    alert("Added to cart")
  }

}