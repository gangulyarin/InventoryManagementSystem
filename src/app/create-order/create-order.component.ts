import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { OrderService } from '../service/order.service';
import { Product } from '../model/product.model';
import { Order } from '../model/order.model';
import { Router } from '@angular/router';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  @ViewChild('createOrderForm')
  createOrderForm:NgForm;

  products:Product[];
  order:Order={
    id:'',
    orderNumber:'',
    productId:'',
    numberShipped:0,
    orderDate: new Date('01-01-1990')
  };
  datePickerConfig:Partial<BsDatepickerConfig>;

  constructor(private productSvcs: ProductService, private orderSvcs: OrderService, private router:Router) { 
    this.products = this.productSvcs.getAllProducts();
    this.datePickerConfig=Object.assign({},{
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  ngOnInit() {
  }

  addOrder(){
    const id=this.orderSvcs.getAllOrders().length.toString();
    const prod = this.productSvcs.getProductById(this.order.productId);
    prod.inventoryOnHand-=this.order.numberShipped;
    prod.inventoryShipped+=this.order.numberShipped;
    this.order.id=id;
    this.orderSvcs.addOrder(this.order);
    this.productSvcs.editProduct(prod);
    this.router.navigateByUrl('/order');
  }

}
