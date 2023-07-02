import { Component } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-electronics-products',
  templateUrl: './electronics-products.component.html',
  styleUrls: ['./electronics-products.component.css']
})
export class ElectronicsProductsComponent {
   public productElectronics: any;
  constructor(private api: ApiService){

  }

  ngOnInit(): void{
    this.api.getElectronics().subscribe(res => {
      this.productElectronics = res;
     })
  }
}
