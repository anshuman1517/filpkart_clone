import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-jewelry-products',
  templateUrl: './jewelry-products.component.html',
  styleUrls: ['./jewelry-products.component.css']
})
export class JewelryProductsComponent {
  public productJewelry: any;
  constructor(private api: ApiService){

  }

  ngOnInit(): void{
    this.api.getJewelry().subscribe(res => {
      this.productJewelry = res;
     })
  }
}
