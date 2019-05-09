import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule} from 'angular-font-awesome';
import { BsDatepickerModule} from 'ngx-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductService } from './service/product.service';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PurchaseService } from './service/purchase.service';
import { OrderService } from './service/order.service';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreatePurchaseComponent } from './create-purchase/create-purchase.component';
import { ReportComponent } from './report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    OrderComponent,
    PurchaseComponent,
    PageNotFoundComponent,
    CreateProductComponent,
    EditProductComponent,
    CreateOrderComponent,
    CreatePurchaseComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    AngularFontAwesomeModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService,PurchaseService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
