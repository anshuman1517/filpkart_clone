import { NgModule } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AdvertiseComponent } from './component/advertise/advertise.component';
import { BestSellerComponent } from './component/best-seller/best-seller.component';
import { CartComponent } from './component/cart/cart.component';
import { CouponsComponent } from './component/coupons/coupons.component';
import { CustomerCareComponent } from './component/customer-care/customer-care.component';
import { ElectronicsProductsComponent } from './component/electronics-products/electronics-products.component';
import { FashionProductsComponent } from './component/fashion-products/fashion-products.component';
import { FlipKartPlusComponent } from './component/flip-kart-plus/flip-kart-plus.component';
import { GiftCardsComponent } from './component/gift-cards/gift-cards.component';
import { JewelryProductsComponent } from './component/jewelry-products/jewelry-products.component';
import { NotificationsComponent } from './component/notifications/notifications.component';
import { OrdersComponent } from './component/orders/orders.component';
import { ProductsComponent } from './component/products/products.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SuperCoinZoneComponent } from './component/super-coin-zone/super-coin-zone.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'fashion', component: FashionProductsComponent},
  {path:'jewelry', component: JewelryProductsComponent},
  {path:'electronics', component: ElectronicsProductsComponent},
  {path:'profile', component: ProfileComponent},
  {path:'notifications', component: NotificationsComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'coupons', component: CouponsComponent},
  {path: 'giftCards', component: GiftCardsComponent},
  {path: 'plus', component: FlipKartPlusComponent},
  {path: 'superCoin', component: SuperCoinZoneComponent},
  {path: 'bestSeller', component: BestSellerComponent},
  {path: 'customerCare', component: CustomerCareComponent},
  {path: 'advertise', component: AdvertiseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
