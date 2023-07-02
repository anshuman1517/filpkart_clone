import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { FashionProductsComponent } from './component/fashion-products/fashion-products.component';
import { JewelryProductsComponent } from './component/jewelry-products/jewelry-products.component';
import { ElectronicsProductsComponent } from './component/electronics-products/electronics-products.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProfileComponent } from './component/profile/profile.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';
import { OrdersComponent } from './component/orders/orders.component';
import { CouponsComponent } from './component/coupons/coupons.component';
import { SuperCoinZoneComponent } from './component/super-coin-zone/super-coin-zone.component';
import { FlipKartPlusComponent } from './component/flip-kart-plus/flip-kart-plus.component';
import { GiftCardsComponent } from './component/gift-cards/gift-cards.component';
import { BestSellerComponent } from './component/best-seller/best-seller.component';
import { CustomerCareComponent } from './component/customer-care/customer-care.component';
import { AdvertiseComponent } from './component/advertise/advertise.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    FashionProductsComponent,
    JewelryProductsComponent,
    ElectronicsProductsComponent,
    FooterComponent,
    ProfileComponent,
    NotificationsComponent,
    WishlistComponent,
    OrdersComponent,
    CouponsComponent,
    SuperCoinZoneComponent,
    FlipKartPlusComponent,
    GiftCardsComponent,
    BestSellerComponent,
    CustomerCareComponent,
    AdvertiseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
