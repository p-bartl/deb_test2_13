import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {

  fullname:string = ''
  sum_total:number = 0

  constructor(private cartService:CartService,private router:Router) { }

  ngOnInit(): void {

    this.fullname = this.cartService.getPurchaseInfo().fullname;
    this.sum_total = this.cartService.getPurchaseInfo().sum_total;
    this.cartService.resetCart()
  }

  backToProductList(){
    this.router.navigateByUrl('')
  }
}