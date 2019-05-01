import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {path:'product', component:ProductComponent},
  {path:'editProduct', component:EditProductComponent},
  {path:'createProduct', component:CreateProductComponent},
  {path:'order', component:OrderComponent},
  {path:'createOrder', component:CreateOrderComponent},
  {path:'purchase', component:PurchaseComponent},
  {path:'createPurchase', component:CreatePurchaseComponent},
  {path:'report', component:ReportComponent},
  {path:'', redirectTo:'/product', pathMatch:'full'},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
