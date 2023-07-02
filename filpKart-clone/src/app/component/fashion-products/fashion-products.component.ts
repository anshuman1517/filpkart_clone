import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-fashion-products',
  templateUrl: './fashion-products.component.html',
  styleUrls: ['./fashion-products.component.css']
})
export class FashionProductsComponent {

  public productFashion: any;
  constructor(private api: ApiService){

  }

  ngOnInit(): void{
    this.api.getFashion().subscribe(res => {
      this.productFashion = res;
     })
  }
}
