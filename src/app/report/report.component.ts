import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../service/purchase.service';
import { ProductService } from '../service/product.service';
import { OrderService } from '../service/order.service';
import { Product } from '../model/product.model';
import { Purchase } from '../model/purchase.model';
import { forEach } from '@angular/router/src/utils/collection';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private purchaseSvc: PurchaseService, private productSvcs:ProductService, private orderSvc:OrderService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  
  public products:Product[];
  public purchases:Purchase[];
  public orders:Order[];
  public barChartLabels = this.productSvcs.getAllProductTypes().sort();//['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData; /*= [
    {data: [], label: 'Purchases'},
    {data: [], label: 'Orders'}
  ];*/

  ngOnInit() {
    this.products = this.productSvcs.getAllProducts();
    this.purchases = this.purchaseSvc.getAllPurchases();
    this.orders = this.orderSvc.getAllOrders();

    var data1:number[]=[];
    var data2:number[]=[];
    for(var i=0;i<this.barChartLabels.length;i++){
      data1[i] = 0;
      this.purchases.forEach(p=>{
        if(this.productSvcs.getProductById(p.productId).productLabel == this.barChartLabels[i])
          data1[i]++;
      });
    }

    for(var i=0;i<this.barChartLabels.length;i++){
      data2[i] = 0;
      this.orders.forEach(p=>{
        if(this.productSvcs.getProductById(p.productId).productLabel == this.barChartLabels[i])
          data2[i]++;
      });
    }

    this.barChartData = [
      {data: data1, label: 'Purchases'},
      {data: data2, label: 'Orders'}
    ]
  }

}
