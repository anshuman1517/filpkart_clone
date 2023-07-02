import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
 
productList:any;
productElectronics: any;

constructor(private api :ApiService,
  private cartService: CartService){}

ngOnInit(): void{
 this.api.getProduct().subscribe(res => {
  this.productList = res;

  this.productList.forEach((a:any) => {
    Object.assign(a,{Quantity: 1, total: a.price})
  });
 })
}

addToCart(item:any){
  console.log(item)
  this.cartService.addToCart(item)
}
}
