import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import { productArray } from 'src/app/models/model';
import { ProductItemService } from 'src/app/services/product-item.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product_parent = {id:0,name:'',price:0,url:'',description:''}
  @Output() addedProduct = new EventEmitter()

  quantityList = [1,2,3,4,5,6,7,8,9,10]
  amount_input_frontend = 1;

  constructor(private productItemService:ProductItemService,private cartService:CartService) { }

  ngOnInit(): void {
  }

  addToCart(product:productArray):void{
    this.addedProduct.emit({product:product,amount_input:this.amount_input_frontend})
  }

  setSelectedItem(product_parent:productArray){
    this.productItemService.setSelectedProduct(product_parent)
  }
}
